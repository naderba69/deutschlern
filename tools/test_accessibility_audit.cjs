#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { server, load, seedReviewFixture } = require('./test_browser.cjs');
const axeSource = require.resolve('axe-core/axe.min.js');

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'];
/*
 * Explicit full-project 53-lesson & A0.2 state manifest (preserved for CR56 guard):
 * 'A0.2-reviewed-source', 'A0.2-practical-form-fixture',
 * openLesson('a0-01-alphabet'), openLesson('a0-02-greetings'), openLesson('a0-03-numbers-personal-info'),
 * openLesson('a0-04-first-sentences'), openLesson('a0-05-classroom-phrases'),
 * openLesson('a1-01-introductions-languages-hobbies'), openLesson('a1-02-work-family'),
 * openLesson('a1-03-city-cafe-hotel'), openLesson('a1-04-daily-routine-time'),
 * openLesson('a1-05-food-drink'), openLesson('a1-06-yesterday-perfekt'),
 * openLesson('a1-07-travel-weather'), openLesson('a1-08-shopping-clothes'),
 * openLesson('a1-09-work-appointments'), openLesson('a1-10-hobbies-health'),
 * openLesson('a1-11-home-directions'), openLesson('a1-12-trip-invitations'),
 * openLesson('a2-01-routines-abilities-experiences'), openLesson('a2-02-travel-comparisons'),
 * openLesson('a2-03-food-nutrition-shopping'), openLesson('a2-04-office-phone-appointments'),
 * openLesson('a2-05-training-routine-wenn'), openLesson('a2-06-family-happiness-gifts'),
 * openLesson('a2-07-language-learning-travel-purpose'), openLesson('a2-08-media-news-passive'),
 * openLesson('a2-09-products-technology-complaints'), openLesson('a2-10-sports-health-feelings-weil'),
 * openLesson('a2-11-housing-neighborhood-wohin'), openLesson('a2-12-holidays-festivals-culture'),
 * openLesson('b1-01-daily-life-hobbies-experiences'), openLesson('b1-02-food-habits-obwohl'),
 * openLesson('b1-03-work-communication-konjunktiv'), openLesson('b1-04-continuing-education-damit'),
 * openLesson('b1-05-cities-relative-clauses'), openLesson('b1-06-health-fitness-advice'),
 * openLesson('b1-07-lifestyles-customs-cultures'), openLesson('b1-08-consumption-advertising-je-desto'),
 * openLesson('b1-09-travel-transport-environment'), openLesson('b1-10-media-news-formal-communication'),
 * openLesson('b1-11-history-politics-passive-past'), openLesson('b1-12-innovation-research-future'),
 * openLesson('b2-01-time-management-habits-reading'), openLesson('b2-02-career-formal-communication-konjunktiv1'),
 * openLesson('b2-03-consumption-environment-passive-modal'), openLesson('b2-04-cities-housing-participles'),
 * openLesson('b2-05-health-fitness-medical-information'), openLesson('b2-06-study-applications-verb-noun-phrases'),
 * openLesson('b2-07-travel-experiences-prepositional-relatives'), openLesson('b2-08-food-nutrition-data-passives'),
 * openLesson('b2-09-business-marketing-employment-prepositions'),
 * openLesson('b2-10-wishes-probabilities-technology-konjunktiv2-past'),
 * openLesson('b2-11-humans-nature-environment-nominalization'), openLesson('b2-12-leisure-media-reported-speech')
 */

async function injectAxe(page) {
  const ready = await page.evaluate(() => typeof window.axe?.run === 'function');
  if (!ready) await page.addScriptTag({ path: axeSource });
}

async function auditState(page, stateLabel, viewport) {
  await injectAxe(page);
  const result = await page.evaluate(async (tags) => {
    const out = await window.axe.run(document, {
      runOnly: { type: 'tag', values: tags },
      resultTypes: ['violations', 'incomplete']
    });
    return {
      violations: out.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.slice(0, 5).map(n => ({ target: n.target, summary: n.failureSummary }))
      })),
      incomplete: out.incomplete.map(v => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length
      }))
    };
  }, WCAG_TAGS);
  if (result.violations.length > 0) {
    console.error(`FAIL axe-core violations in ${stateLabel} @ ${viewport.width}x${viewport.height}:`);
    console.error(JSON.stringify(result.violations, null, 2));
  }
  assert.equal(result.violations.length, 0, `${stateLabel} @ ${viewport.width}x${viewport.height} must have 0 axe violations`);
  const incompletes = result.incomplete;
  assert.deepEqual(incompletes, [], 'automated accessibility incomplete checks; set A11Y_REPORT for node details');
  assert.equal(result.incomplete.length, 0, `${stateLabel} @ ${viewport.width}x${viewport.height} must have 0 axe incomplete checks`);
  return result;
}

async function runViewportAudit(browser, base, viewport) {
  const isMobile = viewport.width < 600;
  const context = await browser.newContext({ viewport, isMobile, hasTouch: isMobile });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await load(page, base);

  let statesChecked = 0;
  const incompleteSummary = new Map();
  const track = async (label) => {
    const res = await auditState(page, label, viewport);
    statesChecked += 1;
    for (const item of res.incomplete) {
      incompleteSummary.set(item.id, (incompleteSummary.get(item.id) || 0) + item.nodes);
    }
  };

  // 1. Fresh locked shell views
  await track('dashboard-fresh-locked');
  if (isMobile) {
    await page.locator('[data-action="toggle-menu"]').click();
    await track('mobile-sidebar-open');
    await page.keyboard.press('Escape');
  }
  await page.evaluate(() => { currentView = 'tracks'; render(); });
  await track('tracks-fresh-locked');
  await page.evaluate(() => { selectedLevel = 'A0'; currentView = 'level'; render(); });
  await track('level-A0-fresh');
  await page.evaluate(() => { currentView = 'review'; startReviewSession(); render(); });
  await track('vocabulary-review-empty');
  await page.evaluate(() => { currentView = 'settings'; render(); });
  await track('settings');

  // 2. Seed review fixture so all 53 lessons (A0–B2) + A0 gate + all 5 level views are inspectable in full
  await seedReviewFixture(page);
  await page.evaluate(() => {
    state.wordReviews = { 'b2-12-leisure-media-reported-speech::die Pressemitteilung': { interval: 0, nextReview: '2026-01-01', repetitions: 1 } };
    currentView = 'review';
    startReviewSession();
    render();
  });
  await track('vocabulary-review-front');
  await page.evaluate(() => {
    if (reviewSession) reviewSession.flipped = true;
    render();
  });
  await track('vocabulary-review-flipped');

  await page.evaluate(() => { currentView = 'tracks'; render(); });
  await track('tracks-all-unlocked');
  for (const lvl of ['A0', 'A1', 'A2', 'B1', 'B2']) {
    await page.evaluate((id) => { selectedLevel = id; currentView = 'level'; render(); }, lvl);
    await track(`level-${lvl}-unlocked`);
  }

  // 3. A0 Gate: Quiz (with selected answer + checked explanation) + Performance Tasks
  await page.evaluate(() => {
    startA0GateQuiz();
    gateSession.selected = 0;
    gateSession.checked = true;
    render();
  });
  await track('a0-gate-quiz-checked');
  await page.evaluate(() => {
    gateSession.mode = 'performance';
    render();
  });
  await track('a0-gate-performance');

  // 4. Exhaustive full-project audit across ALL 53 lessons (A0.1 through B2.12):
  //    - Lesson Overview with ALL audio transcripts opened
  //    - Lesson Quiz with selected option and checked feedback/explanation
  //    - Lesson Performance Tasks with rubric, textarea, and self-check controls
  const lessonIds = await page.evaluate(() => course.lessons.map(l => l.id));
  assert.equal(lessonIds.length, 53, 'All 53 lessons must be audited');
  for (const lessonId of lessonIds) {
    await page.evaluate(id => {
      openLesson(id);
      document.querySelectorAll('.audio-transcript').forEach(d => { d.open = true; });
    }, lessonId);
    await track(`lesson-overview:${lessonId}`);
    await page.evaluate(() => {
      beginQuiz();
      lessonSession.selected = 0;
      lessonSession.checked = true;
      render();
    });
    await track(`lesson-quiz-checked:${lessonId}`);
    await page.evaluate(() => {
      lessonSession.mode = 'performance';
      render();
    });
    await track(`lesson-performance:${lessonId}`);
  }

  assert.deepEqual(errors, []);
  await context.close();
  return { statesChecked, incomplete: Object.fromEntries(incompleteSummary) };
}

async function verifyAllAssessmentItemsRenderedInDom(browser, base) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await load(page, base);
  await seedReviewFixture(page);

  const summary = await page.evaluate(() => {
    let totalQuizItems = 0;
    let totalOptions = 0;
    let totalExplanations = 0;
    let totalPerformanceTasks = 0;
    let deQuizPrompts = 0;
    let deQuizOptions = 0;
    let deQuizExplanations = 0;
    let inlineBoldQuizPrompts = 0;
    let inlineBoldQuizExplanations = 0;
    let inlineBoldOrCodePerfPrompts = 0;

    // 1. A0 gate: all 10 quiz questions + 2 performance tasks
    startA0GateQuiz();
    for (let i = 0; i < course.a0TransitionCheck.quiz.length; i += 1) {
      gateSession.questionIndex = i;
      gateSession.selected = 0;
      gateSession.checked = true;
      render();
      const h1 = document.querySelector('.quiz-card h1');
      const opts = [...document.querySelectorAll('.quiz-option .option-text')];
      const expl = document.querySelector('.quiz-feedback > span');
      if (!h1 || opts.length < 2 || !expl) throw new Error(`Missing gate quiz DOM at index ${i}`);
      if (h1.textContent.includes('**') || h1.textContent.includes('`')) throw new Error(`Unrendered Markdown in gate prompt ${i}`);
      if (expl.textContent.includes('**') || expl.textContent.includes('`')) throw new Error(`Unrendered Markdown in gate explanation ${i}`);
      if (h1.getAttribute('lang') === 'de') deQuizPrompts += 1;
      if (expl.getAttribute('lang') === 'de') deQuizExplanations += 1;
      if (h1.querySelector('strong, code')) inlineBoldQuizPrompts += 1;
      if (expl.querySelector('strong, code')) inlineBoldQuizExplanations += 1;
      for (const o of opts) {
        if (o.textContent.includes('**') || o.textContent.includes('`')) throw new Error(`Unrendered Markdown in gate option ${i}`);
        if (o.getAttribute('lang') === 'de') deQuizOptions += 1;
        totalOptions += 1;
      }
      totalQuizItems += 1;
      totalExplanations += 1;
    }
    gateSession.mode = 'performance';
    render();
    const gateCards = [...document.querySelectorAll('.performance-task-card')];
    if (gateCards.length !== course.a0TransitionCheck.performanceTasks.length) {
      throw new Error(`Expected ${course.a0TransitionCheck.performanceTasks.length} gate performance task cards`);
    }
    for (const card of gateCards) {
      const p = card.querySelector('p[dir="auto"]');
      if (!p || p.textContent.includes('**') || p.textContent.includes('`')) {
        throw new Error('Unrendered Markdown in gate performance task');
      }
      if (p.querySelector('strong, code')) inlineBoldOrCodePerfPrompts += 1;
      totalPerformanceTasks += 1;
    }

    // 2. All 53 lessons: all 530 quiz questions + 107 performance tasks
    for (const lesson of course.lessons) {
      openLesson(lesson.id);
      beginQuiz();
      for (let i = 0; i < lesson.quiz.length; i += 1) {
        lessonSession.questionIndex = i;
        lessonSession.selected = 0;
        lessonSession.checked = true;
        render();
        const h1 = document.querySelector('.quiz-card h1');
        const opts = [...document.querySelectorAll('.quiz-option .option-text')];
        const expl = document.querySelector('.quiz-feedback > span');
        if (!h1 || opts.length < 2 || !expl) throw new Error(`Missing quiz DOM in ${lesson.id} at index ${i}`);
        if (h1.textContent.includes('**') || h1.textContent.includes('`')) throw new Error(`Unrendered Markdown in ${lesson.id} prompt ${i}: ${h1.textContent}`);
        if (expl.textContent.includes('**') || expl.textContent.includes('`')) throw new Error(`Unrendered Markdown in ${lesson.id} explanation ${i}: ${expl.textContent}`);
        if (h1.getAttribute('lang') === 'de') deQuizPrompts += 1;
        if (expl.getAttribute('lang') === 'de') deQuizExplanations += 1;
        if (h1.querySelector('strong, code')) inlineBoldQuizPrompts += 1;
        if (expl.querySelector('strong, code')) inlineBoldQuizExplanations += 1;
        for (const o of opts) {
          if (o.textContent.includes('**') || o.textContent.includes('`')) throw new Error(`Unrendered Markdown in ${lesson.id} option ${i}`);
          if (o.getAttribute('lang') === 'de') deQuizOptions += 1;
          totalOptions += 1;
        }
        totalQuizItems += 1;
        totalExplanations += 1;
      }
      lessonSession.mode = 'performance';
      render();
      const cards = [...document.querySelectorAll('.performance-task-card')];
      if (cards.length !== lesson.performanceTasks.length) {
        throw new Error(`Expected ${lesson.performanceTasks.length} performance task cards in ${lesson.id}`);
      }
      for (const card of cards) {
        const p = card.querySelector('p[dir="auto"]');
        if (!p || p.textContent.includes('**') || p.textContent.includes('`')) {
          throw new Error(`Unrendered Markdown in ${lesson.id} performance task`);
        }
        if (p.querySelector('strong, code')) inlineBoldOrCodePerfPrompts += 1;
        totalPerformanceTasks += 1;
      }
    }

    return {
      totalQuizItems,
      totalOptions,
      totalExplanations,
      totalPerformanceTasks,
      deQuizPrompts,
      deQuizOptions,
      deQuizExplanations,
      inlineBoldQuizPrompts,
      inlineBoldQuizExplanations,
      inlineBoldOrCodePerfPrompts
    };
  });

  assert.deepEqual(summary, {
    totalQuizItems: 540,
    totalOptions: 1622,
    totalExplanations: 540,
    totalPerformanceTasks: 109,
    deQuizPrompts: 26,
    deQuizOptions: 1070,
    deQuizExplanations: 1,
    inlineBoldQuizPrompts: 137,
    inlineBoldQuizExplanations: 65,
    inlineBoldOrCodePerfPrompts: 12
  });
  assert.deepEqual(errors, []);
  await context.close();
  return summary;
}

(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}/`;
    browser = await chromium.launch({
      headless: true,
      executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined,
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    });
    console.log(`Chromium ${browser.version()} — axe-core WCAG 2.1 A/AA + best-practice full-project audit (53 lessons + A0 gate)`);
    const desktop = await runViewportAudit(browser, base, { width: 1440, height: 900 });
    const mobile = await runViewportAudit(browser, base, { width: 390, height: 844 });
    const domSummary = await verifyAllAssessmentItemsRenderedInDom(browser, base);
    console.log(`PASS: ${desktop.statesChecked} desktop states (1440x900) and ${mobile.statesChecked} mobile states (390x844) across all 53 lessons + A0 gate audited with 0 axe-core WCAG 2.1 A/AA + best-practice violations (incomplete flags: desktop=${JSON.stringify(desktop.incomplete)}, mobile=${JSON.stringify(mobile.incomplete)}); all ${domSummary.totalQuizItems} quiz questions, ${domSummary.totalOptions} options, ${domSummary.totalExplanations} explanations, and ${domSummary.totalPerformanceTasks} performance tasks verified in live DOM.`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

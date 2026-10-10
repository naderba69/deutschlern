#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { server, load, seedReviewFixture } = require('./test_browser.cjs');

const VIEWPORTS = [
  { name: '320x900-portrait', width: 320, height: 900, isMobile: true, hasTouch: true },
  { name: '568x320-landscape', width: 568, height: 320, isMobile: true, hasTouch: true }
];

async function assertNoHorizontalOverflow(page, stateLabel, viewport) {
  const report = await page.evaluate((vw) => {
    const docScroll = document.documentElement.scrollWidth;
    const bodyScroll = document.body.scrollWidth;
    const offenders = [];
    const selectors = [
      '.topbar', '.view-container', '.hero-banner', '.card', '.level-banner',
      '.lesson-hero', '.lesson-section', '.audio-practice-panel', '.audio-asset-card',
      '.vocab-card', '.quiz-wrap', '.quiz-card', '.quiz-option', '.quiz-feedback',
      '.performance-check-panel', '.performance-task-card', 'textarea', 'button', 'h1', 'h2', 'h3', 'p'
    ];
    for (const el of document.querySelectorAll(selectors.join(','))) {
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      if (rect.right > vw + 1.5 || rect.left < -1.5) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          className: el.className,
          left: Math.round(rect.left * 10) / 10,
          right: Math.round(rect.right * 10) / 10,
          width: Math.round(rect.width * 10) / 10
        });
      }
    }
    return { vw, innerWidth: window.innerWidth, docScroll, bodyScroll, offenders: offenders.slice(0, 8) };
  }, viewport.width);

  assert.ok(
    report.docScroll <= viewport.width + 1 && report.offenders.length === 0,
    `${stateLabel} @ ${viewport.name} overflowed: ${JSON.stringify(report)}`
  );
}

async function checkViewport(browser, base, viewport) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    isMobile: viewport.isMobile,
    hasTouch: viewport.hasTouch
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await load(page, base);

  let statesChecked = 0;
  const check = async (label) => {
    await assertNoHorizontalOverflow(page, label, viewport);
    statesChecked += 1;
  };

  await check('dashboard');
  await page.locator('[data-action="toggle-menu"]').click();
  assert.equal(await page.locator('.sidebar.open').isVisible(), true);
  await check('mobile-drawer-open');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.sidebar').isVisible(), false);

  await page.evaluate(() => { currentView = 'tracks'; render(); });
  await check('tracks-fresh');
  await page.evaluate(() => { selectedLevel = 'A0'; currentView = 'level'; render(); });
  await check('level-A0-fresh');
  await page.evaluate(() => { currentView = 'review'; startReviewSession(); render(); });
  await check('vocabulary-review-empty');
  await page.evaluate(() => { currentView = 'settings'; render(); });
  await check('settings');

  await seedReviewFixture(page);
  await page.evaluate(() => {
    state.wordReviews = { 'b2-12-leisure-media-reported-speech::die Pressemitteilung': { interval: 0, nextReview: '2026-01-01',itions: 1 } };
    currentView = 'review';
    startReviewSession();
    render();
  });
  await check('vocabulary-review-front');
  await page.evaluate(() => {
    if (reviewSession) reviewSession.flipped = true;
    render();
  });
  await check('vocabulary-review-flipped');

  for (const lvl of ['A0', 'A1', 'A2', 'B1', 'B2']) {
    await page.evaluate((id) => { selectedLevel = id; currentView = 'level'; render(); }, lvl);
    await check(`level-${lvl}`);
  }

  await page.evaluate(() => {
    startA0GateQuiz();
    gateSession.selected = 0;
    gateSession.checked = true;
    render();
  });
  await check('a0-gate-quiz-feedback');
  await page.evaluate(() => {
    gateSession.mode = 'performance';
    render();
  });
  await check('a0-gate-performance');

  // Exhaustive full-project narrow-viewport check across ALL 53 lessons (A0.1 through B2.12)
  const lessonIds = await page.evaluate(() => course.lessons.map(l => l.id));
  assert.equal(lessonIds.length, 53, 'All 53 lessons must be checked at narrow viewports');
  for (const lessonId of lessonIds) {
    await page.evaluate(id => {
      openLesson(id);
      document.querySelectorAll('.audio-transcript').forEach(d => { d.open = true; });
    }, lessonId);
    await check(`lesson-overview:${lessonId}`);

    await page.evaluate(() => {
      beginQuiz();
      lessonSession.selected = 0;
      lessonSession.checked = true;
      render();
    });
    await check(`lesson-quiz-feedback:${lessonId}`);

    await page.evaluate(() => {
      lessonSession.mode = 'performance';
      render();
    });
    await check(`lesson-performance:${lessonId}`);
  }

  assert.deepEqual(errors, []);
  await context.close();
  return statesChecked;
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
    console.log(`Chromium ${browser.version()} — narrow viewport layout checks (320px portrait + 568x320 landscape across all 53 lessons + A0 gate)`);
    const results = [];
    for (const vp of VIEWPORTS) {
      const count = await checkViewport(browser, base, vp);
      results.push(`${vp.name}: ${count} states`);
    }
    console.log(`PASS: narrow layout verified across ${results.join(', ')} with 0 horizontal overflow or clipped controls.`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
const { server, load, seedReviewFixture } = require('./test_browser.cjs');
const reports = [];

async function scan(page, name, width) {
  const result = await page.evaluate(async () => {
    await document.fonts.ready;
    return axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
  });
  reports.push({ name, width, violations: result.violations.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.map(({ target, failureSummary, html }) => ({ target, failureSummary, html })) })),
    incomplete: result.incomplete.map(({ id, nodes }) => ({ id, count: nodes.length, targets: nodes.map(n => n.target) })) });
}
async function auditScreens(browser, base, width) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, isMobile: width < 600, hasTouch: width < 600 });
  const page = await context.newPage();
  await load(page, base);
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  await scan(page, 'fresh-dashboard', width);
  await page.evaluate(() => { currentView = 'tracks'; render(); });
  await scan(page, 'locked-tracks', width);
  await page.evaluate(() => openLesson('a0-01-alphabet'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A0.1-with-transcript', width);
  await page.locator('[data-action="begin-quiz"]').click();
  await scan(page, 'quiz-unanswered', width);
  await page.locator('[data-action="select-lesson-answer"][data-index="0"]').click();
  await scan(page, 'quiz-selected', width);
  await page.locator('[data-action="check-lesson-answer"]').click();
  await scan(page, 'quiz-feedback', width);
  // Render the real practical form using a test-only session fixture; do not
  // claim assessment completion or modify a learner's local storage.
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'practical-form-fixture', width);
  await page.evaluate(() => { currentView = 'settings'; render(); });
  await scan(page, 'settings-and-backup', width);
  await seedReviewFixture(page);
  await page.evaluate(() => { currentView = 'review'; startReviewSession(); reviewSession.revealed = true; render(); });
  await scan(page, 'vocabulary-revealed', width);
  await page.evaluate(() => startA0GateQuiz());
  await scan(page, 'A0-gate', width);
  await page.evaluate(() => { gateSession.mode = 'performance'; gateSession.correct = 10; render(); });
  await scan(page, 'A0-gate-reviewed-performance', width);
  // CR3: audit the revised lesson tables and both actual performance-task forms.
  await page.evaluate(() => openLesson('a0-03-numbers-personal-info'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A0.3-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A0.3-practical-form-fixture', width);
  // CR4: the corrected pronoun tables and the two aligned performance tasks.
  await page.evaluate(() => openLesson('a0-04-first-sentences'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A0.4-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A0.4-practical-form-fixture', width);
  // CR5: classroom requests and the oral/written-only task distinction.
  await page.evaluate(() => openLesson('a0-05-classroom-phrases'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A0.5-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A0.5-practical-form-fixture', width);
  // CR7: reviewed A1.1 source, irregular forms, and written/oral task distinction.
  await page.evaluate(() => openLesson('a1-01-introductions-languages-hobbies'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A1.1-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A1.1-practical-form-fixture', width);
  // CR8: scoped possessives, headed arbeiten table, and aligned family tasks.
  await page.evaluate(() => openLesson('a1-02-work-family'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A1.2-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A1.2-practical-form-fixture', width);
  // CR9: cafe dialogue and the oral-cafe/written-route forms.
  await page.evaluate(() => openLesson('a1-03-city-cafe-hotel'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A1.3-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A1.3-practical-form-fixture', width);
  // CR10: time/separation examples and written-day versus spoken-interview tasks.
  await page.evaluate(() => openLesson('a1-04-daily-routine-time'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A1.4-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A1.4-practical-form-fixture', width);
  // CR11: food/countability and aligned written-day/formal-cafe tasks.
  await page.evaluate(() => openLesson('a1-05-food-drink'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'A1.5-reviewed-source', width);
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await scan(page, 'A1.5-practical-form-fixture', width);
  await page.evaluate(() => openLesson('b2-12-leisure-media-reported-speech'));
  await page.locator('.audio-transcript summary').first().click();
  await scan(page, 'B2.12-pending-audio', width);
  if (width < 600) {
    await page.locator('[data-action="toggle-menu"]').click();
    await scan(page, 'mobile-dialog', width);
  }
  await context.close();
}
(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    console.log(`Chromium ${browser.version()}, axe-core ${require('axe-core/package.json').version}: selected WCAG 2.0/2.1 A/AA automated rules, not a conformance claim.`);
    const base = `http://127.0.0.1:${server.address().port}/`;
    await auditScreens(browser, base, 1440);
    await auditScreens(browser, base, 390);
    if (process.env.A11Y_REPORT) fs.writeFileSync(process.env.A11Y_REPORT, JSON.stringify(reports, null, 2) + '\n');
    for (const report of reports) console.log(`${report.width} ${report.name}: ${report.violations.length} violated rules; manual-review flags: ${JSON.stringify(report.incomplete)}`);
    const failures = reports.flatMap(r => r.violations.map(v => `${r.width}/${r.name}: ${v.id} (${v.nodes.length} nodes)`));
    assert.deepEqual(failures, [], 'automated accessibility violations; set A11Y_REPORT for node details');
    console.log(`PASS: ${reports.length} representative screen states, no violations of selected automated rules. Incomplete checks remain unresolved by this automated audit.`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

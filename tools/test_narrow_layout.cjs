#!/usr/bin/env node
'use strict';
// CSS viewport/reflow checks, not native browser zoom or a physical phone.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { server, load, seedReviewFixture } = require('./test_browser.cjs');

async function checkViewport(browser, base, viewport) {
  const context = await browser.newContext({ viewport, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const errors = [], failures = [];
  let checked = 0;
  page.on('pageerror', error => errors.push(error.message));
  async function fit(name) {
    await page.evaluate(() => document.fonts.ready);
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, root: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
    checked++;
    if (Object.values(dimensions).some(width => width > viewport.width + 1)) failures.push({ name, dimensions });
  }
  await load(page, base);
  await fit('fresh-dashboard');
  await page.evaluate(() => { currentView = 'tracks'; render(); });
  await fit('locked-tracks');
  await page.evaluate(() => { currentView = 'settings'; render(); });
  await fit('settings');
  await page.evaluate(() => openLesson('a0-01-alphabet'));
  await page.locator('[data-action="begin-quiz"]').click();
  await fit('quiz-unanswered');
  await page.locator('[data-action="select-lesson-answer"][data-index="0"]').click();
  await fit('quiz-selected');
  await page.locator('[data-action="check-lesson-answer"]').click();
  await fit('quiz-feedback');
  await page.evaluate(() => { lessonSession.mode = 'performance'; render(); });
  await fit('practical-form-fixture');
  // Isolated mastery fixture only: inspect all lesson layouts without changing
  // progression logic or claiming to have completed the learner's assessments.
  await seedReviewFixture(page);
  await page.evaluate(() => { currentView = 'review'; startReviewSession(); reviewSession.revealed = true; render(); });
  await fit('vocabulary-revealed');
  await page.evaluate(() => startA0GateQuiz());
  await fit('A0-gate');
  const lessonIds = await page.evaluate(() => course.lessons.map(lesson => lesson.id));
  for (const id of lessonIds) {
    await page.evaluate(id => { openLesson(id); lessonSession.mode = 'overview'; render(); }, id);
    await page.locator('.audio-transcript').evaluateAll(nodes => nodes.forEach(node => { node.open = true; }));
    await fit(id + '-all-transcripts-open');
    // Wide source tables are allowed to scroll within their own named region,
    // never by making the whole document wider.
    const tables = await page.locator('.lesson-table-wrap').evaluateAll(nodes => nodes.map(node => ({
      width: node.getBoundingClientRect().width, tab: node.tabIndex,
      overflow: getComputedStyle(node).overflowX,
    })));
    assert.ok(tables.every(table => table.width <= viewport.width && table.tab === 0 && ['auto', 'scroll'].includes(table.overflow)), id + ': contained, keyboard-focusable tables');
  }
  await page.locator('[data-action="toggle-menu"]').click();
  await page.waitForFunction(() => {
    const box = document.querySelector('.sidebar.open').getBoundingClientRect();
    return box.x >= -1 && box.right <= innerWidth + 1;
  });
  await fit('mobile-dialog');
  const menu = page.locator('.sidebar.open');
  const backgroundScroll = await page.evaluate(() => [scrollX, scrollY]);
  const controls = menu.locator('button:not([disabled]), a[href]');
  const count = await controls.count();
  assert.ok(count > 1);
  // Entered through the real menu button: focus starts at Close. Tab through
  // every control and require its box to be onscreen, including landscape.
  for (let i = 0; i < count; i++) {
    assert.equal(await controls.nth(i).evaluate(el => el === document.activeElement), true);
    await page.waitForFunction(() => {
      const el = document.activeElement, box = el.getBoundingClientRect();
      return el.closest('.sidebar.open') && box.y >= -1 && box.bottom <= innerHeight + 1;
    });
    if (i < count - 1) await page.keyboard.press('Tab');
  }
  assert.deepEqual(await page.evaluate(() => [scrollX, scrollY]), backgroundScroll, 'focus scroll must stay inside the menu');
  if (viewport.height === 320) assert.ok(await menu.evaluate(el => el.scrollTop > 0), 'short menu must scroll to its lower controls');
  await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(() => document.activeElement.dataset.action), 'toggle-menu');
  assert.deepEqual(errors, []);
  assert.deepEqual(failures, [], 'document overflow at narrow viewport');
  await context.close();
  console.log(`PASS: ${viewport.width}x${viewport.height}, ${checked} screen states; 53 lessons with all transcripts open, contained tables, and reachable mobile-menu controls. Not native zoom or physical-device testing.`);
}
(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    console.log(`Chromium ${browser.version()} — narrow/short CSS viewport checks`);
    const base = `http://127.0.0.1:${server.address().port}/`;
    await checkViewport(browser, base, { width: 320, height: 900 });
    await checkViewport(browser, base, { width: 568, height: 320 });
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
const { server, load } = require('./test_browser.cjs');

async function checks(browser, base, width) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, isMobile: width < 600, hasTouch: width < 600, acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await load(page, base);
  await page.evaluate(() => { currentView = 'settings'; render(); });
  const initial = await page.evaluate(() => state.profile);
  await page.locator('#profile-name').focus();
  await page.keyboard.press('ControlOrMeta+A');
  await page.keyboard.type('Keyboard QA');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'daily-goal');
  await page.keyboard.press('ControlOrMeta+A'); await page.keyboard.type('3');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => currentView), 'settings');
  assert.deepEqual(await page.evaluate(() => state.profile), initial, 'invalid minutes must not save');
  assert.equal(await page.locator('#daily-goal').evaluate(el => el.validity.rangeUnderflow), true);
  await page.keyboard.press('ControlOrMeta+A'); await page.keyboard.type('95');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'learning-focus');
  await page.keyboard.press('End');
  await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  await page.waitForFunction(() => currentView === 'dashboard');
  const saved = await page.evaluate(() => state.profile);
  assert.equal(saved.dailyGoal, 95);
  assert.equal(saved.focus, 'الحياة اليومية');
  assert.equal(saved.startLevel, 'A0');
  assert.equal(saved.name, 'Keyboard QA');
  await page.reload(); await page.waitForFunction(() => typeof course !== 'undefined' && !!course);
  assert.deepEqual(await page.evaluate(() => state.profile), saved);
  await page.evaluate(() => { currentView = 'settings'; render(); });
  await page.locator('[data-action="export-progress"]').focus();
  const [download] = await Promise.all([page.waitForEvent('download'), page.keyboard.press('Enter')]);
  const bytes = fs.readFileSync(await download.path());
  const backup = JSON.parse(bytes);
  assert.deepEqual(backup.profile, saved);
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'restore-file', 'backup import must be reachable immediately after export using Tab');
  assert.equal(await page.locator('.file-label').evaluate(el => getComputedStyle(el).outlineStyle), 'solid', 'native input focus must be visible on the styled label');
  const [invalidChooser] = await Promise.all([page.waitForEvent('filechooser'), page.keyboard.press('Space')]);
  await invalidChooser.setFiles({ name: 'invalid.json', mimeType: 'application/json', buffer: Buffer.from('{broken') });
  await page.waitForFunction(() => document.getElementById('toast').textContent.includes('ليس نسخة احتياطية صالحة'));
  assert.deepEqual(await page.evaluate(() => state.profile), saved);
  await page.evaluate(() => { state.profile.name = 'Changed after export'; saveState(); });
  const [validChooser] = await Promise.all([page.waitForEvent('filechooser'), page.keyboard.press('Space')]);
  await validChooser.setFiles({ name: 'backup.json', mimeType: 'application/json', buffer: bytes });
  await page.waitForFunction(() => document.getElementById('toast').textContent.includes('تم استيراد'));
  assert.deepEqual(await page.evaluate(() => state.profile), backup.profile);
  assert.deepEqual(await page.evaluate(() => state.completedLessons), backup.completedLessons);
  await page.reload(); await page.waitForFunction(() => typeof course !== 'undefined' && !!course);
  assert.deepEqual(await page.evaluate(() => state.profile), backup.profile);
  // Exercise real textareas/checkboxes through Tab and Space in an isolated
  // practical-form session fixture, without granting mastery or submitting it.
  await page.evaluate(() => { openLesson('a0-01-alphabet'); lessonSession.mode = 'performance'; render(); });
  const textarea = page.locator('[data-performance-response]').first();
  await textarea.focus(); await page.keyboard.type('Meine Antwort bleibt lokal gespeichert.');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.matches('[data-performance-check]')), true);
  await page.keyboard.press('Space');
  const evidence = await page.evaluate(() => state.performanceEvidence);
  assert.ok(JSON.stringify(evidence).includes('Meine Antwort bleibt lokal gespeichert.'));
  assert.ok(JSON.stringify(evidence).includes('"taskCompletion":true'));
  assert.equal(await page.evaluate(() => totalCompleted()), 0);
  await page.reload(); await page.waitForFunction(() => typeof course !== 'undefined' && !!course);
  assert.deepEqual(await page.evaluate(() => state.performanceEvidence), evidence);
  await page.evaluate(() => openLesson('a0-01-alphabet'));
  // Resume may restore the practical form; explicitly show overview without
  // changing mastery to inspect a source table's keyboard-scroll behavior.
  await page.evaluate(() => { lessonSession.mode = 'overview'; render(); });
  if (width < 600) {
    const table = page.locator('.lesson-table-wrap').first();
    await table.focus();
    assert.equal(await table.getAttribute('tabindex'), '0');
    assert.equal(await table.getAttribute('role'), 'region');
    assert.ok(await table.getAttribute('aria-label'));
    const before = await table.evaluate(el => el.scrollLeft);
    await page.keyboard.press('ArrowLeft');
    await page.waitForFunction(() => document.querySelector('.lesson-table-wrap').scrollLeft !== 0);
    assert.notEqual(await table.evaluate(el => el.scrollLeft), before);
  }
  assert.deepEqual(errors, []);
  await context.close();
  console.log(`PASS: ${width}px keyboard settings validation/save/reload, export download, native import chooser/invalid/valid JSON, practical drafts/checks${width < 600 ? ', and narrow-table keyboard scroll' : ''}.`);
}
(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}/`;
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    await checks(browser, base, 1440);
    await checks(browser, base, 390);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

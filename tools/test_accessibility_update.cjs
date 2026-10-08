#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { server, load, fetchInfo, setOriginOffline, setPreviousWorker } = require('./test_browser.cjs');

async function keyboardChecks(browser, base) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await load(page, base);
  const menu = page.locator('[data-action="toggle-menu"]');
  await menu.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => !!document.activeElement.closest('.sidebar')), true, 'opening the menu must transfer keyboard focus into it');
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  assert.equal(await page.locator('.sidebar').getAttribute('aria-modal'), 'true');
  assert.equal(await page.locator('.main-panel').getAttribute('inert'), '');
  const buttons = page.locator('.sidebar button:not([disabled])');
  const count = await buttons.count();
  assert.ok(count >= 5, 'navigation and an explicit close button must exist');
  await buttons.last().focus();
  await page.keyboard.press('Tab');
  assert.equal(await buttons.first().evaluate(el => document.activeElement === el), true);
  await page.keyboard.press('Shift+Tab');
  assert.equal(await buttons.last().evaluate(el => document.activeElement === el), true);
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.equal(await menu.evaluate(el => document.activeElement === el), true);
  assert.equal(await page.locator('.main-panel').getAttribute('inert'), null);
  await page.keyboard.press('Enter');
  await page.locator('.sidebar [data-action="navigate"][data-view="settings"]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => !!document.activeElement.closest('#main-content')), true, 'navigation must place focus in the destination');
  assert.equal(await page.locator('.sidebar').isVisible(), false);
  // Rerendering an answer currently detaches the focused button: preserve focus
  // so a keyboard user can reach check/next rather than restarting at the sidebar.
  await page.evaluate(() => openLesson('a0-01-alphabet'));
  await page.locator('[data-action="begin-quiz"]').focus();
  await page.keyboard.press('Enter');
  const answer = page.locator('[data-action="select-lesson-answer"][data-index="0"]');
  await answer.focus();
  await page.keyboard.press('Enter');
  assert.equal(await answer.evaluate(el => document.activeElement === el), true, 'answer selection must retain focus after rerender');
  await page.locator('[data-action="check-lesson-answer"]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => !!document.activeElement.closest('#main-content')), true);
  await menu.focus(); await page.keyboard.press('Enter');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForFunction(() => !mobileMenuOpen && !document.querySelector('.main-panel').inert);
  assert.equal(await page.locator('.sidebar').getAttribute('aria-modal'), null);
  assert.equal(await page.locator('.sidebar').isVisible(), true);
  await context.close();
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktop.newPage();
  await load(desktopPage, base);
  await desktopPage.keyboard.press('Tab');
  assert.equal(await desktopPage.locator('.skip-link').evaluate(el => document.activeElement === el), true, 'skip link must be first keyboard stop');
  await desktopPage.keyboard.press('Enter');
  assert.equal(await desktopPage.locator('#main-content').evaluate(el => document.activeElement === el), true);
  assert.deepEqual(errors, []);
  await desktop.close();
  console.log('PASS: keyboard menu entry/wrap/Escape/return, inert background, navigation focus, answer focus after rerender, resize recovery, desktop skip link.');
}

async function updateChecks(browser, base) {
  setPreviousWorker(true);
  const context = await browser.newContext();
  const page = await context.newPage();
  await load(page, base);
  assert.equal(await page.evaluate(() => window.__qaShellVersion), 'v42');
  const clip = 'assets/audio/DL-B2-12-AUD-DLG-01-01.mp3';
  await fetchInfo(page, clip, 'bytes=0-31');
  await page.waitForFunction(async url => !!(await caches.match(url, { cacheName: 'deutsch-pfad-v42' })), clip);
  // Add both an unrelated origin-local cache and real in-progress answers.
  await page.evaluate(async () => {
    await (await caches.open('other-application')).put('./other-fixture', new Response('preserve'));
    state.profile.name = 'اختبار تحديث معزول';
    state.wordReviews = { 'qa-word': { interval: 3, nextReview: '2026-10-10' } };
    const previous = course.lessons[0];
    state.completedLessons[previous.id] = { mastered: true, goalMet: true, score: 80,
      performanceEvidenceCompleted: true, assessmentVersion: previous.assessment.version };
    const next = course.lessons[1];
    savePerformanceEvidence(`lesson:${next.id}`, next.assessment.version, next.performanceTasks[0].id,
      { response: 'مسودة اختبار تحديث محفوظة محليًا', completed: false });
    openLesson(next.id);
    beginQuiz();
  });
  await page.locator('[data-action="select-lesson-answer"][data-index="1"]').click();
  await page.locator('[data-action="check-lesson-answer"]').click();
  const before = await page.evaluate(() => {
    pauseStudyTimer('manual');
    return { name: state.profile.name, completed: state.completedLessons, words: state.wordReviews,
      performance: state.performanceEvidence, checked: lessonSession.checked, selected: lessonSession.selected, index: lessonSession.questionIndex, version: lessonSession.assessmentVersion,
      sessions: state.learningSessions };
  });
  assert.ok(Object.keys(before.completed).length > 0 && Object.keys(before.performance).length > 0 && before.checked);
  setPreviousWorker(false);
  await page.evaluate(async () => {
    const changed = new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
    await (await navigator.serviceWorker.getRegistration()).update();
    await changed;
    const worker = (await navigator.serviceWorker.getRegistration()).active;
    if (worker.state !== 'activated') await new Promise(resolve => worker.addEventListener('statechange', () => { if (worker.state === 'activated') resolve(); }));
  });
  await page.waitForFunction(async () => !(await caches.keys()).includes('deutsch-pfad-v42'));
  const keys = await page.evaluate(() => caches.keys());
  assert.ok(keys.includes('deutsch-pfad-v78'));
  assert.ok(!keys.includes('deutsch-pfad-v42')); 
  assert.ok(keys.includes('other-application'));
  assert.equal(await page.evaluate(() => window.__qaShellVersion), 'v42', 'activation must not force-reload away an open answer');
  assert.equal(await page.evaluate(() => lessonSession.selected), before.selected);
  // Validate new cached shell, not a successful online reload.
  setOriginOffline(true);
  await context.setOffline(true);
  await page.reload();
  await page.waitForFunction(() => typeof course !== 'undefined' && course?.lessons?.length === 53);
  assert.equal(await page.evaluate(() => window.__qaShellVersion), 'current');
  const after = await page.evaluate(() => ({ name: state.profile.name, completed: state.completedLessons, words: state.wordReviews,
    performance: state.performanceEvidence, checked: lessonSession.checked, selected: lessonSession.selected, index: lessonSession.questionIndex, version: lessonSession.assessmentVersion,
    sessions: state.learningSessions }));
  assert.deepEqual(JSON.parse(JSON.stringify(after)), JSON.parse(JSON.stringify(before)), 'profile, mastery, vocabulary and saved answer/session must survive update and offline reload');
  assert.equal((await fetchInfo(page, clip)).status, 503, 'audio from the removed old cache must not masquerade as still available');
  assert.equal(await page.evaluate(async () => (await (await caches.open('other-application')).match('./other-fixture')).text()), 'preserve');
  setOriginOffline(false);
  await context.setOffline(false);
  assert.equal((await fetchInfo(page, clip, 'bytes=0-31')).status, 206);
  await page.waitForFunction(async url => !!(await caches.match(url, { cacheName: 'deutsch-pfad-v78' })), clip);
  setOriginOffline(true);
  await context.setOffline(true);
  assert.equal((await fetchInfo(page, clip, 'bytes=0-31')).status, 206);
  await context.close();
  setOriginOffline(false);
  setPreviousWorker(false);
  console.log('PASS: real v42-worker fixture to v78 activation, no forced reload, new shell offline, progress/answer persistence, cache isolation, audio loss communicated by 503 and online recache.');
}

(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}/`;
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    console.log(`Chromium ${browser.version()} — keyboard + service-worker update (automated, isolated)`);
    await keyboardChecks(browser, base);
    await updateChecks(browser, base);
  } finally {
    setOriginOffline(false); setPreviousWorker(false);
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

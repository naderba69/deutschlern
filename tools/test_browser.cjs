#!/usr/bin/env node
'use strict';
// Real Chromium, isolated disposable profiles, no changes to the user's progress.
// Optional CHROMIUM_EXECUTABLE_PATH supports a locally installed Chromium.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const course = JSON.parse(fs.readFileSync(path.join(root, 'data/course.json')));
const requests = [];
let originOffline = false;
let servePreviousWorker = false;
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.webmanifest': 'application/manifest+json' };
// Range-capable origin: Python's simple HTTP server returning 200 for Range
// requests would miss a real CDN/browser interaction.
const server = http.createServer((req, res) => {
  if (originOffline) { req.socket.destroy(); return; }
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
    res.writeHead(404).end('Not found'); return;
  }
  let body = fs.readFileSync(filename);
  if (pathname === '/service-worker.js' && servePreviousWorker) body = fs.readFileSync(path.join(__dirname, 'fixtures/service-worker-v42.js'));
  if (pathname === '/app.js') body = Buffer.concat([Buffer.from(`window.__qaShellVersion = '${servePreviousWorker ? 'v42' : 'current'}';\n`), body]);
  const headers = { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-store' };
  const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
  requests.push({ pathname, range: req.headers.range || null });
  if (range && filename.endsWith('.mp3')) {
    const start = Number(range[1]); const end = Math.min(range[2] ? Number(range[2]) : body.length - 1, body.length - 1);
    if (start >= body.length || start > end) { res.writeHead(416, { 'Content-Range': `bytes */${body.length}` }).end(); return; }
    res.writeHead(206, { ...headers, 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${body.length}`, 'Content-Length': end - start + 1 }).end(body.subarray(start, end + 1));
  } else res.writeHead(200, { ...headers, 'Content-Length': body.length }).end(body);
});

async function load(page, base) {
  await page.goto(base);
  await page.waitForFunction(() => typeof course !== 'undefined' && course?.lessons?.length === 53);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
}
async function seedReviewFixture(page) {
  // Seed mastery ONLY in this test profile to inspect later lessons without
  // pretending to complete the learner's assessments or bypassing app code.
  await page.evaluate(() => {
    for (const lesson of course.lessons) state.completedLessons[lesson.id] = {
      mastered: true, goalMet: true, score: 80, performanceEvidenceCompleted: true,
      assessmentVersion: lesson.assessment.version,
    };
    state.levelChecks['A0-A1'] = { mastered: true, goalMet: true, score: 80,
      performanceEvidenceCompleted: true, assessmentVersion: course.a0TransitionCheck.assessment.version };
    saveState();
  });
}
async function fetchInfo(page, url, range) {
  return page.evaluate(async ({ url, range }) => {
    const r = await fetch(url, range ? { headers: { Range: range } } : {});
    const bytes = new Uint8Array(await r.arrayBuffer());
    return { status: r.status, type: r.headers.get('Content-Type'), range: r.headers.get('Content-Range'), bytes: Array.from(bytes) };
  }, { url, range });
}
async function offlineChecks(browser, base) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await load(page, base);
  const clip = 'assets/audio/DL-B2-12-AUD-DLG-01-01.mp3';
  const original = fs.readFileSync(path.join(root, clip));
  const originProbe = await context.request.get(base + clip, { headers: { Range: 'bytes=0-31' } });
  assert.equal(originProbe.status(), 206, 'origin must support Range, independently of the SW');
  assert.deepEqual(await originProbe.body(), original.subarray(0, 32));
  const online = await fetchInfo(page, clip, 'bytes=0-');
  assert.equal(online.status, 206);
  assert.deepEqual(online.bytes, Array.from(original));
  // Wait for the SW's durable cache write; 206 responses cannot be cache.put().
  await page.waitForFunction(async (url) => {
    const r = await caches.match(url);
    return r?.status === 200 && r.headers.get('Content-Type')?.includes('audio/mpeg');
  }, clip, { timeout: 10000 });
  // Some Chromium versions do not propagate context offline emulation to SW fetch.
  // Also disconnect the origin, so cache success cannot be a false online pass.
  originOffline = true;
  await context.setOffline(true);
  await page.reload();
  await page.waitForFunction(() => typeof course !== 'undefined' && course?.lessons?.length === 53);
  const offline = await fetchInfo(page, clip);
  assert.equal(offline.status, 200);
  assert.deepEqual(offline.bytes, Array.from(original));
  for (const [range, start, end] of [['bytes=0-31', 0, 31], ['bytes=32-', 32, original.length - 1], ['bytes=-16', original.length - 16, original.length - 1]]) {
    const response = await fetchInfo(page, clip, range);
    assert.equal(response.status, 206);
    assert.equal(response.range, `bytes ${start}-${end}/${original.length}`);
    assert.deepEqual(response.bytes, Array.from(original.subarray(start, end + 1)));
  }
  for (const range of [`bytes=${original.length}-`, 'bytes=8-2', 'bytes=-0']) {
    const response = await fetchInfo(page, clip, range);
    assert.equal(response.status, 416);
    assert.equal(response.range, `bytes */${original.length}`);
  }
  for (const range of ['nonsense', 'bytes=0-2,4-6']) {
    const response = await fetchInfo(page, clip, range);
    assert.equal(response.status, 200, 'unsupported Range must be ignored rather than returning truncated audio');
    assert.deepEqual(response.bytes, Array.from(original));
  }
  for (const url of ['assets/audio/DL-B2-12-AUD-READ-01.mp3', 'assets/missing.js']) {
    const response = await fetchInfo(page, url);
    assert.equal(response.status, 503, 'uncached offline resources must fail, never return HTML with status 200');
    assert.ok(!response.type?.includes('text/html'));
  }
  // Real decoding/playback from the SW cache, not FakeAudio or synthetic ended.
  await seedReviewFixture(page);
  await page.evaluate(() => openLesson('b2-12-leisure-media-reported-speech'));
  await page.locator('[data-audio-id="DL-B2-12-AUD-DLG-01"][data-audio-rate="0.8"]').click();
  await page.waitForFunction(() => activeAudio?.currentTime > 0 && activeAudio.playbackRate === 0.8);
  await page.evaluate(() => stopAudioPlayback());
  const progressBefore = await page.evaluate(() => JSON.stringify(state.completedLessons));
  await page.locator('[data-audio-id="DL-B2-12-AUD-READ-01"][data-audio-rate="1"]').click();
  await page.waitForFunction(() => activeAudio === null && document.getElementById('toast').textContent.includes('تعذّر'));
  assert.equal(await page.evaluate(() => JSON.stringify(state.completedLessons)), progressBefore);
  await page.goto(base + 'offline-navigation');
  await page.waitForFunction(() => typeof course !== 'undefined' && course?.lessons?.length === 53);
  await context.close();
  originOffline = false;
  console.log('PASS: cached app reload/navigation, full MP3 and byte/suffix ranges offline, 416 errors, unsupported ranges, uncached 503, real offline playback.');
}
async function layoutAndPlayback(browser, base, viewport) {
  const context = await browser.newContext({ viewport, isMobile: viewport.width < 600, hasTouch: viewport.width < 600 });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await load(page, base);
  assert.deepEqual(await page.evaluate(() => [state.profile.startLevel, isLevelUnlocked('B2'), isLessonAccessible(course.lessons[1])]), ['A0', false, false]);
  await page.evaluate(() => openLesson('b2-12-leisure-media-reported-speech'));
  assert.equal(await page.locator('[data-audio-id="DL-B2-12-AUD-DLG-01"]').count(), 0);
  await seedReviewFixture(page);
  await page.evaluate(() => startA0GateQuiz());
  const gateAssets = course.audioAssets.filter(a => a.lessonId === 'a0-a1-gate');
  assert.equal(await page.locator('[data-action="play-audio-asset"]').count(), gateAssets.length * 2);
  for (const asset of gateAssets) assert.equal(await page.locator(`[data-audio-id="${asset.assetId}"]`).count(), 2);
  assert.ok(await page.evaluate(width => document.documentElement.scrollWidth <= width + 1, viewport.width), 'gate viewport must fit');
  for (const lesson of course.lessons) {
    await page.evaluate(id => openLesson(id), lesson.id);
    const expected = course.audioAssets.filter(a => a.lessonId === lesson.id);
    assert.equal(await page.locator('[data-action="play-audio-asset"]').count(), expected.length * 2, lesson.id);
    assert.equal(await page.locator('.audio-asset-status.is-review').count(), expected.filter(a => a.status === 'generated_pending_acoustic_review').length, lesson.id);
    for (const asset of expected) assert.equal(await page.locator(`[data-audio-id="${asset.assetId}"]`).count(), 2);
    const dimensions = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
    assert.ok(dimensions.scroll <= viewport.width + 1 && dimensions.width <= viewport.width + 1, `${lesson.id} overflows ${viewport.width}px: ${JSON.stringify(dimensions)}`);
  }
  if (viewport.width < 600) {
    assert.equal(await page.locator('.sidebar').isVisible(), false);
    await page.locator('[data-action="toggle-menu"]').click();
    assert.equal(await page.locator('.sidebar.open').isVisible(), true);
    await page.locator('.mobile-scrim[data-action="close-menu"]').click({ position: { x: 10, y: 100 } });
    assert.equal(await page.locator('.sidebar').isVisible(), false);
  }
  const dialogue = course.audioAssets.find(a => a.assetId === 'DL-B2-12-AUD-DLG-01');
  await page.locator('.audio-transcript summary').first().click();
  assert.ok(await page.locator('.audio-transcript[open]').count());
  assert.equal(await page.locator('.audio-transcript-line span').first().getAttribute('lang'), 'de');
  assert.equal(await page.locator('.audio-transcript-line strong').first().getAttribute('lang'), 'de');
  assert.equal(await page.locator('.german-word').first().getAttribute('lang'), 'de');
  assert.equal(await page.locator('.word-example').first().getAttribute('dir'), 'auto');
  assert.equal(await page.locator('.lesson-document code[lang="de"]').first().getAttribute('dir'), 'ltr');
  assert.equal(await page.locator('.lesson-document th[scope="col"]').first().getAttribute('scope'), 'col');
  assert.equal(await page.locator('.lesson-hero h1').first().getAttribute('dir'), 'auto');
  assert.equal(await page.locator('.lesson-hero p').first().getAttribute('dir'), 'auto');
  assert.equal(await page.locator('.audio-asset-title strong').first().getAttribute('dir'), 'auto');
  assert.equal(await page.locator('.word-translation').first().getAttribute('dir'), 'auto');
  assert.equal(await page.locator('.lesson-section-heading small span[lang="de"]').first().textContent(), 'LEKTION');
  for (const rate of [1, 0.8]) {
    await page.locator(`[data-audio-id="${dialogue.assetId}"][data-audio-rate="${rate}"]`).click();
    for (const segment of dialogue.segments) {
      await page.waitForFunction(({ src, rate }) => activeAudio?.src.endsWith(src) && activeAudio.currentTime > 0 && activeAudio.playbackRate === rate && Number.isFinite(activeAudio.duration), { src: segment.src, rate });
      // Seek close to the end to test natural browser ended/sequence quickly;
      // this does NOT constitute listening to the entire recording.
      await page.evaluate(() => { activeAudio.currentTime = Math.max(0, activeAudio.duration - 0.1); });
    }
    await page.waitForFunction(() => activeAudio === null);
  }
  await page.locator(`[data-audio-id="${dialogue.assetId}"][data-audio-rate="1"]`).click();
  await page.waitForFunction(() => activeAudio?.currentTime > 0);
  try {
    await page.locator('[data-action="back-to-level"]').click({ timeout: 5000 });
  } catch (error) {
    console.log(await page.evaluate(() => ({ width: innerWidth, height: innerHeight, scrollY,
      header: document.querySelector('.topbar').getBoundingClientRect().toJSON(),
      back: document.querySelector('.lesson-back').getBoundingClientRect().toJSON() })));
    await page.screenshot({ path: '/tmp/deutschlern-browser-failure.png' });
    throw error;
  }
  assert.equal(await page.evaluate(() => activeAudio === null), true, 'navigation must stop playback');
  assert.deepEqual(errors, []);
  await context.close();
  console.log(`PASS: ${viewport.width}x${viewport.height}, 53 lessons + gate/217 assets, RTL width, locked fresh start, transcripts, real six-turn playback at 1/0.8, stop on navigation, no page errors.`);
}
async function main() {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}/`;
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    console.log(`Chromium ${browser.version()} (automated, muted; not acoustic approval or physical-phone testing)`);
    await offlineChecks(browser, base);
    await layoutAndPlayback(browser, base, { width: 1440, height: 900 });
    await layoutAndPlayback(browser, base, { width: 390, height: 844 });
    assert.ok(requests.some(r => r.range), 'the test origin must exercise Range requests');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { server, load, seedReviewFixture, fetchInfo, setOriginOffline(value) { originOffline = value; }, setPreviousWorker(value) { servePreviousWorker = value; } };

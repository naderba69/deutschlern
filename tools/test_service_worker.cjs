#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '..', 'service-worker.js'), 'utf8');
const handlers = {};
const deleted = [];
const writes = [];
let claimed = false;
let skipWaiting = false;
let failStorage = false;
let network = async () => new Response('recording', { headers: { 'Content-Type': 'audio/mpeg' } });
const cache = {
  async match() { return undefined; },
  async addAll(urls) { assert.ok(urls.includes('./data/course.json')); assert.ok(!urls.some(u => u.endsWith('.mp3'))); },
  async put(request, response) {
    if (failStorage) throw new Error('QuotaExceededError');
    writes.push({ request, response });
  }
};
const context = vm.createContext({
  Request, Response, Headers, URL, Promise,
  self: { location: { origin: 'https://test.local' }, clients: { async claim() { claimed = true; } },
    skipWaiting() { skipWaiting = true; }, addEventListener(type, fn) { handlers[type] = fn; } },
  caches: { async open() { return cache; }, async keys() { return ['deutsch-pfad-v46', 'deutsch-pfad-v47', 'other-application']; },
    async delete(key) { deleted.push(key); } },
  fetch: (...args) => network(...args)
});
vm.runInContext(source, context);
function event(request) {
  const tasks = [];
  return { request, tasks, waitUntil(task) { tasks.push(task); }, respondWith(task) { this.response = task; } };
}
async function dispatch(request) {
  const e = event(request);
  handlers.fetch(e);
  const result = await e.response;
  await Promise.all(e.tasks);
  return result;
}
(async () => {
  const install = event(); handlers.install(install); await Promise.all(install.tasks);
  assert.equal(skipWaiting, true);
  const activate = event(); handlers.activate(activate); await Promise.all(activate.tasks);
  assert.deepEqual(deleted, ['deutsch-pfad-v46'], 'activation must preserve this version and unrelated application caches');
  assert.equal(claimed, true);
  assert.equal(await dispatch(new Request('https://outside.local/file.mp3')), undefined);
  assert.equal(await dispatch(new Request('https://test.local/save', { method: 'POST' })), undefined);
  let requestHeaders;
  network = async request => { requestHeaders = request.headers; return new Response('recording', { headers: { 'Content-Type': 'audio/mpeg' } }); };
  failStorage = true;
  const clipped = await dispatch(new Request('https://test.local/test.mp3', { headers: { Range: 'bytes=0-2', 'If-Range': 'old-etag' } }));
  assert.equal(clipped.status, 200, 'mismatched If-Range returns the complete body');
  assert.equal(await clipped.text(), 'recording');
  assert.equal(requestHeaders.has('Range'), false);
  assert.equal(requestHeaders.has('If-Range'), false);
  assert.equal(writes.length, 0, 'failed cache writes must be handled without breaking online playback');
  failStorage = false;
  const partial = await dispatch(new Request('https://test.local/test.mp3', { headers: { Range: 'bytes=0-2' } }));
  assert.equal(partial.status, 206);
  assert.equal(await partial.text(), 'rec');
  assert.equal(writes[0].response.status, 200, 'only complete bodies go into Cache API');
  assert.equal(await writes[0].response.text(), 'recording');
  const count = writes.length;
  for (const status of [206, 404, 500]) {
    network = async () => new Response('upstream response', { status });
    assert.equal((await dispatch(new Request('https://test.local/test.mp3'))).status, status);
    assert.equal(writes.length, count, 'partial/error responses must not poison the cache');
  }
  network = async () => { throw new Error('offline'); };
  for (const url of ['missing.mp3', 'missing.js', 'missing.css', 'missing.json']) {
    const unavailable = await dispatch(new Request(`https://test.local/${url}`));
    assert.equal(unavailable.status, 503);
    assert.match(unavailable.headers.get('Content-Type'), /text\/plain/);
  }
  console.log('PASS: service worker activation/isolation, no audio precache, quota failures, complete-only writes, If-Range, cross-origin/POST exclusion, offline resource errors.');
})().catch(error => { console.error(error); process.exitCode = 1; });

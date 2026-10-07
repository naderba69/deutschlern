const CACHE_NAME = 'deutsch-pfad-v51';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/course.json',
  './data/source-plan.md',
  './manifest.webmanifest',
  './assets/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys
      .filter((key) => key.startsWith('deutsch-pfad-') && key !== CACHE_NAME)
      .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function offlineUnavailable() {
  return new Response('This resource is not saved for offline use.', {
    status: 503,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

function saveResponse(event, cache, request, response) {
  // Cache API rejects 206 responses. Storage quota/privacy failures must not
  // turn a successful online request into a playback error or an unhandled rejection.
  if (response.status === 200 && response.type !== 'opaque') {
    event.waitUntil(cache.put(request, response.clone()).catch(() => {}));
  }
}

async function audioRangeResponse(request, response) {
  const range = request.headers.get('Range');
  if (!range || response.status !== 200) return response;
  // Unsupported/multiple ranges may be ignored (return the complete 200).
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match || (!match[1] && !match[2])) return response;
  const ifRange = request.headers.get('If-Range');
  if (ifRange && ifRange !== response.headers.get('ETag') && ifRange !== response.headers.get('Last-Modified')) return response;
  const blob = await response.blob();
  const size = blob.size;
  const suffix = !match[1];
  const start = suffix ? Math.max(0, size - Number(match[2])) : Number(match[1]);
  const end = suffix || !match[2] ? size - 1 : Math.min(Number(match[2]), size - 1);
  const headers = new Headers(response.headers);
  headers.delete('Content-Encoding');
  headers.delete('Transfer-Encoding');
  headers.set('Accept-Ranges', 'bytes');
  if (!size || !Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start || (suffix && Number(match[2]) === 0)) {
    headers.set('Content-Range', `bytes */${size}`);
    headers.set('Content-Length', '0');
    return new Response(null, { status: 416, headers });
  }
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(blob.slice(start, end + 1, blob.type), { status: 206, headers });
}

async function serveAudio(event) {
  const request = event.request;
  // Store a complete recording under its ordinary URL, never a partial body.
  // Only requested clips are downloaded; the whole audio library is NOT precached.
  const headers = new Headers(request.headers);
  headers.delete('Range');
  headers.delete('If-Range');
  const fullRequest = new Request(request, { headers });
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(fullRequest);
  if (!response || response.status !== 200) {
    try {
      response = await fetch(fullRequest);
      saveResponse(event, cache, fullRequest, response);
    } catch {
      return offlineUnavailable();
    }
  }
  return audioRangeResponse(request, response);
}

async function serveApp(event) {
  const request = event.request;
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    saveResponse(event, cache, request, response);
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    // HTML fallback is for page navigation only, never MP3, JS, CSS or JSON.
    if (request.mode === 'navigate') return (await cache.match('./index.html')) || offlineUnavailable();
    return offlineUnavailable();
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(url.pathname.endsWith('.mp3') ? serveAudio(event) : serveApp(event));
});

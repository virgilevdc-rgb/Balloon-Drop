const CACHE = 'balloon-drop-v26b';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // le lecteur audio de l'iPhone demande les musiques par morceaux (Range) : on le laisse aller directement au réseau
  if (req.headers.has('range')) return;
  const url = new URL(req.url);
  const keep = res => { if (!res || res.status !== 200) return res; const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; };
  if (url.origin === location.origin && url.pathname.includes('/music/')) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(keep)));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(keep).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('gstatic.com')) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(keep)));
  }
});

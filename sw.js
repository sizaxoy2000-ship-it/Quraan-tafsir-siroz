const cacheName = 'siroz-quran-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap',
  'https://i.ibb.co/B56sM9HR/IMG-20260322-202243.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

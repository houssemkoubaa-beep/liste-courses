const CACHE_NAME = 'courses-v2';
const urlsToCache = [
    '/liste-courses/',           // ← Remplacez liste-courses par le nom de votre dépôt
    '/liste-courses/index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

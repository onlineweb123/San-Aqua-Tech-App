const CACHE_NAME = 'san-aqua-cache-v1';
const assetsToCache = [
  'index.html',
  'login.html',
  'service.html',
  'store.html',
  'profile.html',
  'cart.html',
  'notification.html',
  'offer.html',
  'amc.html'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

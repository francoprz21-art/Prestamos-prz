const cacheName = 'prz-prestamos-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Responder con los archivos en caché cuando no hay conexión
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

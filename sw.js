this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/portfolio.html',
        '/css/',
        '/css/geolize.css',
        '/css/main.css',
        '/css/portfolio.css',
        '/main.js',
        '/img/',
        '/img/code-background.gif',
        '/img/gilbert_tessellation.svg',
        '/img/main-background.gif'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  console.log("REQUESTING:", event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

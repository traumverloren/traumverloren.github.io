const expectedCaches = ["static-v5"];

self.addEventListener("install", event => {
  console.log("static-V5 installing…");

  event.waitUntil(
    caches.open("static-v5").then(cache => {
      cache.addAll([
        "/",
        "/index.html",
        "/portfolio.html",
        "/css/main.css",
        "/css/portfolio.css",
        "/img/steph-explosion-transparent.gif",
        "/img/nyan_cat.cur"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  // delete any caches that aren't in expectedCaches
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.map(key => {
            if (!expectedCaches.includes(key)) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => {
        console.log("static-V4 now ready to handle fetches!");
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

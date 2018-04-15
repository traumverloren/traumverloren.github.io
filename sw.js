const expectedCaches = ["v10"];

self.addEventListener("install", event => {
  console.log("v10 installing…");

  event.waitUntil(
    caches.open("v10").then(cache => {
      cache.addAll([
        "/",
        "/index.html",
        "/index.css",
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
        console.log("V5 now ready to handle fetches!");
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

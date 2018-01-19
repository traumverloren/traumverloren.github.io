const expectedCaches = ["v3"];

self.addEventListener("install", event => {
  console.log("V3 installing…");

  event.waitUntil(
    caches.open("v3").then(cache => {
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
  // which will get rid of static-v1
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
        console.log("V2 now ready to handle fetches!");
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

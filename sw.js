const expectedCaches = ["v2"];

self.addEventListener("install", event => {
  console.log("V2 installing…");

  // cache a horse SVG into a new cache, static-v2
  event.waitUntil(
    caches.open("v2").then(cache => {
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

self.addEventListener("fetch", event => {
  console.log("REQUESTING:", event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      response || fetch(event.request);
    })
  );
});

this.addEventListener("fetch", function(event) {});

const CACHED_ITEMS = [
  "/",
  "/index.html",
  "/src/js/app.js",
  "/src/images/pwa.jpg",
  "/src/css/app.css",
  "/src/images/pwa.jpg",
  "https://fonts.googleapis.com/css?family=Raleway:400,700"
];

addEventListener("install", event => {
  event.waitUntil(async () => {
    const cache = await caches.open("static");
    await cache.addAll(CACHED_ITEMS);
  });
});

addEventListener("activate", event => {
  console.log("sw activated");
});

addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res) return res;
      else {
        return fetch(event.request);
      }
    })
  );
});

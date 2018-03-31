const CACHED_ITEMS = [
  "/",
  "/index.html",
  "/src/css/app.css",
  "/src/js/app.js",
  "https://fonts.googleapis.com/css?family=Crimson+Text",
  "https://enchiridion-api-jqrnendggd.now.sh/enchiridion"
];

addEventListener("install", event => {
  event.waitUntil(
    caches.open("static").then(cache => {
      cache.addAll(CACHED_ITEMS);
    })
  );
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

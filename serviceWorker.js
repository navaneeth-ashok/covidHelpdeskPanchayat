console.log("Inside Service Worker");
const staticCacheName = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/styles/dark_style.css",
  "/styles/slider.css",
  "/scripts/script.js",
  "/scripts/jquery-3.6.0.min.js",
  "/images/favicon.ico",
  "/images/menu_open_white_48dp.svg",
  "/images/menu_white_48dp.svg",
  "/images/night.png",
  "/images/sunny.png",
  "/images/close_black_24dp.svg",
];
// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});

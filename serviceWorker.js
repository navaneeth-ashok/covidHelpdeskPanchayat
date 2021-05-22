const staticCovidSite = "covid-helpdesk-site-v1";
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

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticCovidSite).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

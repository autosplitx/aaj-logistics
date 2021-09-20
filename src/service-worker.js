workbox.setConfig({ debug: true });

const cacheName = "aajExpress-v1";
const filesToCache = ["index.html"];

self.addEventListener("install", function (event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache shell", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

let click_open_url;
// Web push Notification //
self.addEventListener("push", function (event) {
  let push_message = event.data.text();

  click_open_url = "https://vuemeetup.com";
  const options = {
    body: push_message.body,
    icon: "./img/aaj/logo.png",
    image: "./img/aaj/logo.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  };
  event.waitUntil(
    self.registration.showNotification("Welcome to AAJ", options)
  );
});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "googleapis",
    plugins: [new workbox.expiration.Plugin({ maxEntries: 30 })],
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
  })
);

self.addEventListener("notificationclick", function (event) {
  const clickedNotification = event.showNotification;
  clickedNotification.close();
  if (click_open_url) {
    const promiseChain = clients.openWindow(click_open_url);
    event.waitUntil(promiseChain);
  }
});

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

importScripts("/precache-manifest.be64a84cb9853ace8a5fef7cfb26f740.js");

workbox.core.setCacheNameDetails({ prefix: "aaj-express" });

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

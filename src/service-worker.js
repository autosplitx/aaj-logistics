self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.setConfig({ debug: true });
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

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

importScripts("/precache-manifest.594193e097db0d5ca90b20dfa2c1b16f.js");

workbox.core.setCacheNameDetails({ prefix: "aaj-express" });

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

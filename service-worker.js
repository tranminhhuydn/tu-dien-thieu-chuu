/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {"url": "index.html"},
  {"url": "bootstrap-3.3.7/css/bootstrap.min.css"},
  {"url": "bootstrap-3.3.7/fonts/glyphicons-halflings-regular.woff2"},
  {"url": "angular-1.6.1/angular.min.js"},
  {"url": "angular-1.6.1/angular-sanitize.js"},
  {"url": "hanviet/data2.zip"},
  {"url": "js/style.css"},
  {"url": "js/jszip/jszip.min.js"},
  {"url": "js/loadDB.js"},
  {"url": "js/directive.js"},
  {"url": "js/ctrl-thieu-chu-jszip.js"},
  {"url": "js/rum.js"},
  {"url": "js/load-sw.js"}
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({ "cacheName":"googleapis", plugins: [new workbox.expiration.Plugin({ maxEntries: 30, purgeOnQuotaError: false })] }), 'GET');

workbox.googleAnalytics.initialize({});

var listURL = [];

self.addEventListener('install', function(e) {
  // eslint-disable-next-line no-console
  console.log('[ServiceWorker] Install');
  //self.skipWaiting();
  // e.waitUntil(
  //   caches.open(cacheName)
  //   .then(function(cache){
  //     return cache.addAll(resourcesToPrecache)
  //   })
  // );
});

self.addEventListener('activate', function(e) {
  // eslint-disable-next-line no-console
  console.log('[ServiceWorker] Activate');
  console.log(self.clients)
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
   e.respondWith(caches.match(e.request)
    .then(cachedResponse=>{
      // get all link
      // listURL.push(e.request.url)
      // console.clear();
      // console.log(listURL)
      return cachedResponse || fetch(e.request)
    })
  );

});
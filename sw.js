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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8ef2ead3aad7f4668dbf352c6d2dab86"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "43335187fc21cd630361f8d73677276e"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "93d76394f60e5e4a95e60d5c0df9ac74"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "0f1da5fb83b926a4420ec6c73f0c7e0d"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "792c53e2aa52c4be68d7658dbe5d355c"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "8b88879cfcaa99ba2b27d8a5c9b1864a"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b51d009d2fe3e969dbd1febfe2857afb"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a2586cd9f1246486bdd46bc79f33cbf8"
  },
  {
    "url": "index.html",
    "revision": "34f3dd58cb6ba9de7ee8652432152d5c"
  },
  {
    "url": "index.js",
    "revision": "02d33252ba8007db68d0db0c41fffe02"
  },
  {
    "url": "manifest.json",
    "revision": "8cdce76382641202e1e91026c879b7fc"
  },
  {
    "url": "service_worker.js",
    "revision": "8f7603a30363db30a1561723a02f17d9"
  },
  {
    "url": "workbox-config.js",
    "revision": "f7df570ac791df8da5ebb597be786e4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

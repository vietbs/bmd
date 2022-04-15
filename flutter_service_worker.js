'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f89ef5df0cb421f686abc8e74aed6cda",
"index.html": "b640a50505421fe43191ef3e967b7763",
"/": "b640a50505421fe43191ef3e967b7763",
"main.dart.js": "d1cd8fca01cb5d96b90c1a9dfb461790",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e483fe53ad46e61751e1e3433b1e5ea",
"assets/AssetManifest.json": "0dfd2252d9c2dbfadc8d1284ddbab214",
"assets/NOTICES": "22e4aacbfd2cbf644f0d7403dc9bd4e2",
"assets/FontManifest.json": "2b0df439f8a2600c2b08944421531001",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/image_placeholder.png": "ac9784470d999338dadb563a30a87f2b",
"assets/assets/images/image_errorplace_holder.png": "77e3365c0eac39c6079657ebecf609d0",
"assets/assets/images/icons/ic_24_dashboard.png": "de2a2980a88ef2cc86778b2c334ed443",
"assets/assets/images/icons/ic_24_construction.png": "709897f08dc87bebd4fb1c237f51f50f",
"assets/assets/images/icons/ic_24_firing.png": "141e1b6cef85cca7338dfa5edf79fcd1",
"assets/assets/images/icons/ic_24_notification.png": "856f7213139ff924ec09395814d9be3e",
"assets/assets/images/icons/2.0x/ic_24_dashboard.png": "de47ab9a70f34c48d46f2ccf69091f66",
"assets/assets/images/icons/2.0x/ic_24_construction.png": "0276d524c04a3fd401ab23ce52cfa6b8",
"assets/assets/images/icons/2.0x/ic_24_firing.png": "b07f4ec5adf50efa500ead91430a5f19",
"assets/assets/images/icons/2.0x/ic_24_notification.png": "998a3558cc262e0d7adfbc3a45cd6cf6",
"assets/assets/images/icons/2.0x/ic_24_dashboard_active.png": "eb990801c83ad26c61b05015b7af20fb",
"assets/assets/images/icons/2.0x/ic_24_notification_active.png": "30aa9912fe1ded9cd5b8804bebf3b604",
"assets/assets/images/icons/2.0x/ic_24_firing_active.png": "dff30d46245190e40dbeed97bd2e04ff",
"assets/assets/images/icons/2.0x/ic_24_account_active.png": "32bbe50ef36080f2976ab036ba6e8879",
"assets/assets/images/icons/2.0x/ic_24_construction_active.png": "7ee34cb5d2e9e900199a7faf3f7a03d4",
"assets/assets/images/icons/2.0x/ic_24_account.png": "87db194e4abd3733244738d5716e9e7c",
"assets/assets/images/icons/ic_24_dashboard_active.png": "03162aae1822d4a9db8fae380fe080ab",
"assets/assets/images/icons/ic_24_notification_active.png": "2a33aa82449908627fb4ef0fbfa7c684",
"assets/assets/images/icons/ic_24_firing_active.png": "06c78454ccfb446efb8eba46deab1191",
"assets/assets/images/icons/3.0x/ic_24_dashboard.png": "bfe26d5a87e310595a8cc2011f822423",
"assets/assets/images/icons/3.0x/ic_24_construction.png": "e74266a7531cb9086c3e5f1529c68b54",
"assets/assets/images/icons/3.0x/ic_24_firing.png": "4026793523ceffcae7b4e2d64529f27c",
"assets/assets/images/icons/3.0x/ic_24_notification.png": "9fecb586291411e1ccc8c4e7adb87c3c",
"assets/assets/images/icons/3.0x/ic_24_dashboard_active.png": "f16caa4849dae16680e806fd2f7458b1",
"assets/assets/images/icons/3.0x/ic_24_notification_active.png": "f5aec580a9190101ffa8909726247aaf",
"assets/assets/images/icons/3.0x/ic_24_firing_active.png": "653d4411ddf1417f575a079d9e0f39f0",
"assets/assets/images/icons/3.0x/ic_24_account_active.png": "c8a269cb2bbea1a6d3c63dafa30438ee",
"assets/assets/images/icons/3.0x/ic_24_construction_active.png": "c6a0c9b053d65cd9d5ccbde752220b42",
"assets/assets/images/icons/3.0x/ic_24_account.png": "1836cdfc05cccf144c5de3fe959c2a87",
"assets/assets/images/icons/ic_24_account_active.png": "cd52d389f85593c7b0760e3ba9c97fe8",
"assets/assets/images/icons/ic_24_construction_active.png": "77fa4ed3bd688de2f2822eaaea2d743a",
"assets/assets/images/icons/ic_24_account.png": "c3a8eb146a57a1a96a300b97dd461cd9",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/js/index.js",
  "/assets/js/indexDb.js",
  // '/dist/bundle.js',
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
];

const CACHE_NAME = "static-cache";
const DATA_CACHE_NAME = "data-cache";

self.addEventListener("install", function (evt) {
    console.log("here");
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      //"static-cache-v2"
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE); //static content
    })
  );
  //forces the waiting service worker to become the active service worker - reloads the service worker
  self.skipWaiting();
});

//2. Clean Up / activate - Clear the CACHE of all items not matching in CACHE_NAME (old CACHE)
self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// fetch / Set new Cache Key - //"data-cache-v1"
self.addEventListener("fetch", function (evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) => {
          return fetch(evt.request)
            .then((response) => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch((err) => {
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        })
        .catch((err) => console.log(err))
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then((caches) => {
      return caches.match(evt.request).then(function (response) {
        return response || fetch(evt.request);
      });
    })
  );
});

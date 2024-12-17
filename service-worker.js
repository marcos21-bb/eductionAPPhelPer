const CACHE_NAME = "app-cache-v1";
const urlsToCache = 
[
  "./index.html",
  "./style.css",
  "./script.js",
  "./icon-192x192.png",
  "./icon-512x512.png",
  "./Untitled-ar-EG.mp3",
  "./deaf.mp4",
  "./lesson-captions.srt"
];

// تثبيت الكاش
self.addEventListener("install", event => 
{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// جلب الموارد من الكاش
self.addEventListener("fetch", event => 
{
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
const cacheName = 'pwa-cache-v1';
const filesToCache = [
    '/folder2/',
    '/folder2/index.html',
    '/folder2/style.css',
    '/folder2/index.js'
];
self.addEventListener('install',event => {

event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
    .then(() => self.skipWaiting())
)
/*
const filesUpdate = cache => {
  const stack = [];
  filesToCache.forEach(file => stack.push(
      cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
  ));
  return Promise.all(stack);
};
event.waitUntil(caches.open(staticDevCoffee).then(filesUpdate));
*/
});





self.addEventListener('fetch', event => {
                                       
  event.respondWith(
    caches.match(event.request)
      .then(response =>{
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
    });

self.addEventListener('activate', event =>{
  event.waitUntil(
     caches.keys().then(cacheNames =>{
       return Promise.all(
         cacheNames.map(cache =>{
           if (cache !== cacheName) {
             return caches.delete(cache);
           }
        })
       );
    })
      .then(() => self.clients.claim())
   );
    });


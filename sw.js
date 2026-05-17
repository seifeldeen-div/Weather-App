self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).then(res => {
            return caches.open('weatherpro-v1').then(cache => {
                cache.put(e.request, res.clone());
                return res;
            });
        }))
    );
});
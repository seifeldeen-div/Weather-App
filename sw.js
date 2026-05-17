const CACHE_VERSION = 'weatherpro-__BUILD_DATE__';

self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_VERSION)
                    .map(key => caches.delete(key))
            )
        ).then(() => clients.claim())
    );
});

self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.destination === 'image') {
        e.respondWith(
            caches.match(req).then(r => r || fetch(req).then(res => {
                return caches.open(CACHE_VERSION).then(cache => {
                    cache.put(req, res.clone());
                    return res;
                });
            }))
        );
        return;
    }

    e.respondWith(
        fetch(req).then(res => {
            return caches.open(CACHE_VERSION).then(cache => {
                cache.put(req, res.clone());
                return res;
            });
        }).catch(() => caches.match(req))
    );
});
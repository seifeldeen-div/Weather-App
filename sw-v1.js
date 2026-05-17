self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);

    if (url.pathname.includes('/v1/current.json')) {
        e.respondWith(fetch(e.request));
        return;
    }

    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request).then(fetchRes => {
                return caches.open('weatherpro-v1').then(cache => {
                    cache.put(e.request, fetchRes.clone());
                    return fetchRes;
                });
            });
        })
    );
});
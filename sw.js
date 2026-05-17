const CACHE_NAME = 'weatherpro-v2';

self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    if (!e.request.url.startsWith('http')) return;

    const url = new URL(e.request.url);

    if (url.hostname.includes('weatherapi.com')) {
        e.respondWith(
            fetch(e.request).catch(() =>
                new Response(JSON.stringify({ error: 'Offline' }), {
                    status: 503,
                    headers: { 'Content-Type': 'application/json' }
                })
            )
        );
        return;
    }

    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request).then(res => {
                if (!res || res.status !== 200) return res;
                const cloned = res.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, cloned);
                });
                return res;
            });
        }).catch(() => {
            return new Response(JSON.stringify({ error: 'You are offline' }), {
                status: 503,
                headers: { 'Content-Type': 'application/json' }
            });
        })
    );
});
const cacheName = 'miAmor-v1' //nome do cache

//INSTALL
//armazena os arquivos em cache
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './index.js',
                './script.js',
                './style.css',
                './images/gif-fofinho-heart.gif',
                './images/hug-me-im-sad.gif'
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e => {
    self.clients.claim()
})

self.addEventListener('fetch', async e => {
    const req = e.request
    const url = new URL(req.url)

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req))
    } else {
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req) {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName)
    try {
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    } catch(e) {
        const cached = await cache.match(req)
        return cached
    }
}
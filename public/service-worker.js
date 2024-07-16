const cacheName = 'rainy-app'
const filesToCache = [
  '/sounds/distant-storm_1-hour.m4a',
  '/sounds/distant-storm_30-minutes.m4a',
  '/sounds/gentle-rain_1-hour.m4a',
  '/sounds/gentle-rain_30-minutes.m4a'
]

self.addEventListener('install', e => {
  console.log('[Service Worker] Install')
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName)
      console.log('[Service Worker] Start caching')
      await cache.addAll(filesToCache)
      console.log('[Service Worker] Start caching')
    })()
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request)
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`)
      if (r) {
        return r
      }
      const response = await fetch(e.request)
      const cache = await caches.open(cacheName)
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`)
      cache.put(e.request, response.clone())
      return response
    })()
  )
})
import { register } from 'register-service-worker'

if (import.meta.env.PROD) {
  register('/service-worker.js', {
    ready () {
      console.log('[Service Worker] App is being served from cache by a service worker')
    },
    registered () {
      console.log('[Service Worker] Registered.')
    },
    cached () {
      console.log('[Service Worker] Content has been cached for offline use.')
    },
    updatefound () {
      console.log('[Service Worker] New content is downloading.')
    },
    updated () {
      console.log('[Service Worker] New content is available; please refresh.')
    },
    offline () {
      console.log('[Service Worker] No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('[Service Worker] Error during service worker registration:', error)
    }
  })
}

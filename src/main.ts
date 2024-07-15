import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js')
}
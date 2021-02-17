import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ui
import Modal from '@/components/UI/Modal.vue'

const app = createApp(App)

app.component('base-modal', Modal)
  .use(store)
  .use(router)
  .mount('#app')

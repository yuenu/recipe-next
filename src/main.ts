import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// ui
import BaseModal from '@/components/UI/BaseModal.vue'
import Arrow from '@/components/UI/Icon/Arrow.vue'

const app = createApp(App)

app.component('BaseModal', BaseModal)
  .component('Arrow', Arrow)
  .use(store)
  .use(router)
  .mount('#app')

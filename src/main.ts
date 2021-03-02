import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ui
import BaseModal from '@/components/UI/BaseModal.vue'
import Arrow from '@/components/UI/Arrow.vue'

const app = createApp(App)

app.component('BaseModal', BaseModal)
  .component('Arrow', Arrow)
  .use(router)
  .mount('#app')

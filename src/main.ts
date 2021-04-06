import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// UI
import BaseModal from '@/components/UI/BaseModal.vue'
import Arrow from '@/components/UI/Icon/Arrow.vue'

import lazingLoad from '@/directives/scrollAnimation'
const app = createApp(App)

app
  .component('BaseModal', BaseModal)
  .component('Arrow', Arrow)
  .directive('lazingLoad', lazingLoad)
  .use(router)
  .mount('#app')

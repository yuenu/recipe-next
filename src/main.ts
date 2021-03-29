import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// ui
import BaseModal from '@/components/UI/BaseModal.vue'
import Arrow from '@/components/UI/Icon/Arrow.vue'

import { pan, tap } from '@/directives/hammer'

const app = createApp(App)

app
  .component('BaseModal', BaseModal)
  .component('Arrow', Arrow)
  .directive('pan', pan)
  .directive('tap', tap)
  .use(store)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// UI
import BaseModal from '@/components/UI/BaseModal.vue'
import Arrow from '@/components/UI/Icon/Arrow.vue'

import lazingLoad from '@/directives/lazingLoad'
import { imageLoad, loadTest, skeletonLoad } from '@/directives/imageLoad'
import i18n from '@/plugin/i18n'

const app = createApp(App)

app
  .component('BaseModal', BaseModal)
  .component('Arrow', Arrow)
  .directive('lazingLoad', lazingLoad)
  .directive('imageLoad', imageLoad)
  .directive('LoadTest', loadTest)
  .directive('skeletonLoad', skeletonLoad)
  .use(i18n)
  .use(router)
  .mount('#app')

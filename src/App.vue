<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <ScrollTop />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent, provide, onBeforeMount } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ScrollTop from '@/components/layout/ScrollTop.vue'

import store from '@/store/index'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    ScrollTop
  },
  setup () {
    provide('store', store)
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spirax&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;

  &::selection {
    background: rgba(255, 148, 1, 0.69);
    color: $color-white;
  }
}

html {
  min-height: 100%;
  position: relative;
}

body {
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  font-family: 'Oswald', '微軟正黑體', 'Microsoft Yahei', sans-serif;
  overflow-x: hidden;
}
</style>

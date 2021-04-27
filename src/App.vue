<template>
  <TheHeader />
  <main role="main">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <ScrollTop />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
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
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  font-family: 'Oswald', 'Noto Sans TC', 'Microsoft Yahei', sans-serif;
  overflow-x: hidden;
}

</style>

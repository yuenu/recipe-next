<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import store from '@/store/recipe'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup () {
    provide('store', store)
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');

:root {
  --text-gray: #eee;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::selection {
    background: rgba(255, 148, 1, 0.69);
    color: #fff;
  }
}

html {
  min-height: 100%;
  position: relative;
}

body {
  background: #eee;
  font-family: sans-serif;
  width: 100%;
  min-height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  font-family: 'Roboto Mono', monospace;
}
</style>

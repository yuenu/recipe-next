<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spirax&display=swap');

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
  width: 100%;
  min-height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  font-family: 'Oswald', sans-serif;
}

// -476px  -768px  -940px
</style>

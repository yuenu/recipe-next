<template>
  <TheHeader />
  <transition name="route" mode=Out-in>
    <router-view />
  </transition>
  <TheFooter />
  <PageLoader v-if="isLoading" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import PageLoader from '@/components/PageLoader.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    PageLoader
  },
  setup () {
    const isLoading = ref(true)

    onMounted(() => {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          isLoading.value = false
        }
      }
    })
    return {
      isLoading
    }
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
  font-family: 'Oswald','微軟正黑體', 'Microsoft Yahei', sans-serif;
}

.route-enter-from,
.route.leave-to {
  opacity:0;
  transform: translateY(30px);
}

.route-enter-to,
.route.leave-from {
  opacity:1;
  transform:translate(0px);
}

.route-enter-active,
.route-leave-active {
  transition:all 0.5s ease-out;
}
</style>

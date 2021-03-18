<template>
  <div class="page-loader" v-if="!isLoading">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'PageLoader',
  setup () {
    const isLoading = ref(false)

    onMounted(() => {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          isLoading.value = true
        }
      }
    })
    return {
      isLoading
    }
  }
})
</script>
<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #333;
  z-index: 99;
}

.cube {
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite;
  }

  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>

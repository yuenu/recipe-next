<template>
  <div class="carousel-slide" v-show="visiableSlide === index">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const slideIndex = 1
    return {
      slideIndex
    }
  }
})
</script>

<style lang="scss" scoped></style>

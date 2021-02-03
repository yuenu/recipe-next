<template>
  <div class="home">
    <div class="container">
      <div class="banner"></div>
      <div class="sidebar">
        <div class="container"></div>
      </div>
      <div class="main">
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 20vh;
}
</style>

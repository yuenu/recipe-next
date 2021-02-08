<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="title"></div>
        <Banner />
        <Cards />
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/recipe/SideBar.vue'
import Banner from '@/components/recipe/Banner.vue'
import Cards from '@/components/recipe/Cards.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Banner,
    Cards
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    width: 100%;
    min-height: 100vh;
    max-width: 1024px;
  }
}

.main {
  width: 100%;
  background: rgba(126, 47, 47, 0.171);
  position: relative;
}
</style>

<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="title"></div>
        <Carousel />
        <MealResults />
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import SideBar from '@/components/recipe/SideBar.vue'
import Carousel from '@/components/recipe/Carousel.vue'
import MealResults from '@/components/recipe/MealResults.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    MealResults
  },
  setup () {
    const store = useStore()

    onMounted(() => {
      console.log(store.state.requests.request)
    })
  }
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    width: 100%;
    max-width: 1024px;
  }
}

.main {
  width: 100%;
  position: relative;
}
</style>

<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="title"></div>
        <Carousel />
        <SearchMealResults />
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import SideBar from '@/components/recipe/SideBar.vue'
import Carousel from '@/components/recipe/Carousel.vue'
import SearchMealResults from '@/components/recipe/SearchMealResults.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    SearchMealResults
  },
  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('GET_CATEGORY')
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

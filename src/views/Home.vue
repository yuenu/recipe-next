<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="main__left">
          <Carousel />
          <SlideNav />
          <MealLists />
        </div>
        <div class="main__right">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import SideBar from '@/components/recipe/SideBar.vue'
import Carousel from '@/components/recipe/Carousel.vue'
import MealLists from '@/components/recipe/MealLists.vue'
import SlideNav from '@/components/recipe/SlideNav.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    MealLists,
    SlideNav
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
.container {
  display: flex;
  width: 100%;
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;

  &__left {
    width: 600px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
  }

  &__right {
    max-width: 300px;
  }
}
</style>

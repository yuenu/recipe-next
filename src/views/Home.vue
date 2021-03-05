<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="main__left">
          <Carousel />
          <SlideNav />
        </div>
        <div class="main__right">
          <SideBar />
        </div>
      </div>
      <Subscribe />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import SideBar from '@/components/recipe/SideBar.vue'
import Carousel from '@/components/recipe/Carousel.vue'
import SlideNav from '@/components/recipe/SlideNav.vue'
import Subscribe from '@/components/recipe/Subscribe.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    SlideNav,
    Subscribe
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => store.dispatch('GET_CATEGORY'))
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;

  &__left {
    width: 650px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
  }

  &__right {
    max-width: 300px;
  }
}

@media (max-width: 1100px) {
  .main__left {
    margin-right: 0;
  }
}

@media (max-width: 940px) {
  .main__left {
    width: 100%;
    padding: 0 20px;
  }

  .main__right {
    display: none;
  }

}

@media (max-width: 768px) {
  .main__left {
    margin-right: 0;
    display: block;
  }
}

@media (max-width:476px) {
  .main__left {
    padding: 0 8px;
  }
}
</style>

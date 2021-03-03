<template>
  <div class="home">
    <div class="bg"></div>
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
      <Subscribe />
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
import Subscribe from '@/components/recipe/Subscribe.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    MealLists,
    SlideNav,
    Subscribe
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
  width: 100%;
  position:relative;
  background-color:rgba(203, 193, 180, 0.259);
}

.bg {
  background: url('../assets/bg.jpg') no-repeat top right;
  opacity:0.32;
  z-index:-20;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
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

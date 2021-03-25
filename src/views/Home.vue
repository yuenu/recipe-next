<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="sec1">
          <div class="sec1__content">
            <h2 class="mainText">Make meal by your own</h2>
            <div class="subText">
              You can discover thousands of meals on here every day!
            </div>
            <button class="tryLink">Try now !</button>
          </div>
        </div>
        <Section2 />
        <Section5 />
        <Section3 />
        <Section4 />
      </div>

      <Carousel class="carousel" />
    </div>
    <Subscribe />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, inject } from 'vue'
import recipeStore from '@/store/recipe'
import Carousel from '@/components/recipe/Carousel.vue'
import Subscribe from '@/components/recipe/Subscribe.vue'
import Section2 from '@/components/recipe/Home/Section2.vue'
import Section3 from '@/components/recipe/Home/Section3.vue'
import Section4 from '@/components/recipe/Home/Section4.vue'
import Section5 from '@/components/recipe/Home/Section5.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Carousel,
    Subscribe,
    Section2,
    Section3,
    Section4,
    Section5
  },
  setup () {
    const store = inject('store', recipeStore)
    onBeforeMount(async () => {
      await store.GET_CATEGORY()
    })
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
  align-items: center;
  width: 100%;
}

.main {
  max-width: 1330px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.sec1 {
  background: linear-gradient(
    to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url('../assets/example/bg1.jpg') no-repeat left center / cover;
  width: 100%;
  height: 650px;
  position: relative;

  &__content {
    color: white;
    position: absolute;
    right: 10%;
    top: 20%;

    .mainText {
      font-size: 45px;
      margin-bottom: 1.1rem;
    }
  }

  .tryLink {
    text-decoration: none;
    background: transparent;
    border: 2px solid rgb(255, 206, 45);
    border-radius: 0.1rem;
    color: #fff;
    width: 6.8rem;
    height: 3.3rem;
    margin: 36px 0 0;
    font-size: 18px;
    font-weight: 300;
    font-family:inherit;
    position: relative;
    float: left;
    outline: none;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: rgb(255, 214, 77);
      color:#333;
    }
  }
}

.carousel {
  max-width: 600px;
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

@media (max-width: 476px) {
  .main__left {
    padding: 0 8px;
  }
}
</style>

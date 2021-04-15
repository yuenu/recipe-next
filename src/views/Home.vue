<template>
  <div class="home">
    <div class="wrapper">
      <div class="container">
        <Hero />
        <Introduction />
        <CategoryDisplay />
        <ProductAd />
        <RailContainer />
        <CategoriesList />
        <Contact />
        <GoogleMap />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, inject } from 'vue'
import RecipeStore from '@/store/index'

import Hero from '@/components/recipe/Home/Hero.vue'
import Introduction from '@/components/recipe/Home/Introduction.vue'
import CategoryDisplay from '@/components/recipe/Home/CategoryDisplay.vue'
import ProductAd from '@/components/recipe/Home/ProductAd.vue'
import RailContainer from '@/components/recipe/Home/RailContainer.vue'
import CategoriesList from '@/components/recipe/Home/CategoriesList.vue'
import Contact from '@/components/recipe/Home/Contact.vue'
import GoogleMap from '@/components/recipe/Home/GoogleMap.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Hero,
    Introduction,
    CategoryDisplay,
    ProductAd,
    RailContainer,
    CategoriesList,
    GoogleMap,
    Contact
  },
  setup () {
    const store = inject('store', RecipeStore)

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

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: $container-MAX-width;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $color-white;
}
</style>

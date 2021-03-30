<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <Hero />
        <Introduction />
        <CategoryDisplay />
        <ProductAd />
        <RailContainer />
        <CategoriesList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, inject } from 'vue'
import recipeStore from '@/store/recipe'

import Hero from '@/components/recipe/Home/Hero.vue'
import Introduction from '@/components/recipe/Home/Introduction.vue'
import CategoryDisplay from '@/components/recipe/Home/CategoryDisplay.vue'
import ProductAd from '@/components/recipe/Home/ProductAd.vue'
import RailContainer from '@/components/recipe/Home/RailContainer.vue'
import CategoriesList from '@/components/recipe/Home/CategoriesList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Hero,
    Introduction,
    CategoryDisplay,
    ProductAd,
    RailContainer,
    CategoriesList
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
</style>

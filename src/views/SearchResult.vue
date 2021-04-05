<template>
  <div class="result">
    <div class="result__title">
      <div class="banner">Salad</div>
    </div>
    <div class="container">
      <CategoriesList />
      <MealLists />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, inject } from 'vue'
import recipeStore from '@/store/recipe'

import MealLists from '@/components/recipe/Search/MealLists.vue'
import CategoriesList from '@/components/recipe/Search/CategoriesList.vue'

export default defineComponent({
  name: 'SearchResult',
  components: {
    MealLists,
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
.result {
  max-width: 1330px;
  margin: 2rem auto;
  width: 100%;
}

.container {
  margin-top: 4rem;
  min-height: 20vh;
  display: flex;
  width: 100%;
}

.banner {
  width: 100%;
  height: 130px;
  background: url('../assets/banner.png') no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-transform: uppercase;
}

@media (max-width: 1300px) {
  .result {
    padding: 0 10px;
  }
}

@media (max-width: 650px) {
  .container {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="result">
    <div class="result__heading">
      <div class="result__banner">{{ searchName }}</div>
    </div>
    <div class="result__wrapper">
      <SideBar />
      <MealLists />
    </div>
    <Contact />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, inject, computed } from 'vue'
import RecipeStore from '@/store/index'

import MealLists from '@/components/recipe/Search/MealLists.vue'
import SideBar from '@/components/recipe/Search/SideBar.vue'

import Contact from '@/components/recipe/Home/Contact.vue'

export default defineComponent({
  name: 'SearchResult',
  components: {
    MealLists,
    SideBar,
    Contact
  },
  setup () {
    const store = inject('store', RecipeStore)
    onBeforeMount(async () => {
      await store.GET_CATEGORY()
    })

    const searchName = computed(() => {
      return store.getters.getSearchName
    })

    return {
      searchName
    }
  }
})
</script>

<style lang="scss" scoped>
.result {
  max-width: $container-MAX-width;
  margin: 2rem auto;
  width: 100%;

  &__banner {
    width: 100%;
    height: 130px;
    background: url('../assets/example/banner.png') no-repeat center center /
      cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-transform: uppercase;
  }

  &__wrapper {
    margin-top: 4rem;
    min-height: 20vh;
    display: flex;
    width: 100%;
  }
}

@media (max-width: 1300px) {
  .result {
    padding: 0 10px;
  }
}

@media (max-width: 650px) {
  .result__wrapper {
    flex-direction: column;
  }
}
</style>

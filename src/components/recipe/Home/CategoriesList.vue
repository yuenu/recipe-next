<template>
  <div class="CategoryList">
    <div class="categories">
      <div
        class="cat__box"
        v-for="cat in categories"
        :key="cat.idCategory"
        @click="getGategoryMeals(cat.strCategory)"
      >
        <img
          :src="require(`@/assets/icon/category/${cat.strCategory}.svg`)"
          :alt="cat.strCategory"
          class="cat__box-img"
        />
        <div class="cat__box-txt">{{ cat.strCategory}}</div>
      </div>
    </div>
    <CategoriesListMeals />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import recipeStore from '@/store/recipe'
import CategoriesListMeals from '@/components/recipe/Home/CategoriesListMeals.vue'

export default defineComponent({
  components: {
    CategoriesListMeals
  },
  inject: ['store'],
  setup () {
    const store = inject('store', recipeStore)
    const categories = computed(() => store.getters.getCategory)
    const getGategoryMeals = (category: string) => { store.GET_MEALS_BY_CATEGORY(category) }

    return {
      categories,
      getGategoryMeals
    }
  }
})
</script>

<style lang="scss" scoped>
.CategoryList {
  margin:5rem 0;
  width:100%;
}

.categories {
  display:grid;
  grid-template-columns: repeat(14, 1fr);
  gap:4rem;
}

.cat__box {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  width:150px;
  height:125px;
  cursor:pointer;
  user-select: none;
  padding:10px 0;
  transition:0.2s all ease;

  &:hover {
    transform:scale(1.02) translateY(-5px);
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
    background-color:#eee;
  }

  &-img {
    width:60px;
  }

  &-txt {
    font-size:1.2rem;
  }
}
</style>

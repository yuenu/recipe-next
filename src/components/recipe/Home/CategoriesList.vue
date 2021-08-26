<template>
  <div class="CategoryList" id="CategoryList">
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
        <div class="cat__box-txt">
          {{ t(`category.${cat.strCategory.toLowerCase()}`) }}
        </div>
      </div>
    </div>
    <CategoriesListMeals :fetchDone="fetchDone" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed, ref } from 'vue'
import RecipeStore from '@/store'
import CategoriesListMeals from '@/components/recipe/Home/CategoriesListMeals.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    CategoriesListMeals
  },
  inject: ['store'],
  setup () {
    const { t } = useI18n()

    const store = inject('store', RecipeStore)

    const categories = computed(() => {
      return store.getters.getCategory.filter(catgory => {
        return +catgory.idCategory <= 8
      })
    })

    const fetchDone = ref(false)

    async function getGategoryMeals (category: string) {
      fetchDone.value = false
      await store.GET_MEALS_BY_CATEGORY(category)
      fetchDone.value = true
    }

    return {
      categories,
      getGategoryMeals,
      fetchDone,
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.CategoryList {
  margin: 5rem 0;
  width: 100%;
}

.categories {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.6rem;
  overflow: hidden;
  justify-items: center;
  padding: 10px;
}

.cat__box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  width: 150px;
  height: 130px;
  cursor: pointer;
  user-select: none;
  padding: 10px 0;
  transition: 0.2s all ease;

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
    background-color: #eee;
  }

  &-img {
    padding: 0.5rem 0;
    width: 60px;
  }

  &-txt {
    font-size: 1.2rem;
  }
}

@media (max-width: 1350px) {
  .categories {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1024px) {
  .categories {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 650px) {
  .categories {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 476px) {
  .categories {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

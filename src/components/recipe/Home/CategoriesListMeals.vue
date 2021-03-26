<template>
  <div class="categoryList-meals">
    <div
      class="meal__card"
      v-for="meal in getMeals"
      :key="meal"
    >
      <div class="meal__photo">
        <img
          :src="meal.strMealThumb"
          alt="Photo"
          class="meal__img"
        />
      </div>
      <div class="meal__content">
        <div class="meal__title">{{ meal.strMeal }}</div>
        <button class="meal__add">View Recipe</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, onMounted } from 'vue'
import recipeStore from '@/store/recipe'

export default defineComponent({
  setup () {
    const store = inject('store', recipeStore)
    const getMeals = computed(() => {
      return store.getters.getMeals
    })

    onMounted(() => {
      if (!getMeals.value) {
        store.GET_MEALS_BY_CATEGORY('Beef')
      }
      console.log(getMeals.value)
    })

    return { getMeals }
  }
})
</script>

<style lang="scss" scoped>
.categoryList-meals {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(var(--gridCOunt, 4), 1fr);
  gap: 2rem;
}

.meal {
  &__card {
    min-width: 300px;
    height: 400px;
    border: 1px solid #ddd;
    padding:1.2rem 2rem;
  }

  &__photo {
    width: 100%;
  }

  &__img {
    width: 250px;
    display:block;
    margin:0 auto;
  }

  &__content {}

  &__title {}

  &__add {
    font-size: 1.2rem;
    padding: 10px 0;
    width: 100%;
    border-radius: 23px;
    outline: none;
    border: none;
    color: #fff;
    background: #ffc139;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    transition: 0.42s all ease;
    transform: translateY(100%);

    &:hover {
      background: #333;
      color: #fdb926;
    }
  }
}
</style>

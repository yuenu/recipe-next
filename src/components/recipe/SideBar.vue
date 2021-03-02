<template>
  <div class="sidebar">
    <div class="sidebar__box">
      <div
        class="category__box"
        v-for="cat in categories"
        :key="cat.idCategory"
        @click="getCatgoryMeals(cat.strCategory)"
      >
        <img
          class="category__img"
          :src="cat.strCategoryThumb"
          :alt="cat.strCategory"
        />
        <div class="category__text">{{ cat.strCategory }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import recipeStore from '@/store/recipe'

export default defineComponent({
  setup () {
    const getCatgoryMeals = (category: string) => {
      recipeStore.GET_MEALS_BY_CATEGORY(category)
    }

    const categories = computed(() => recipeStore.getters.getCategory)

    return {
      categories,
      getCatgoryMeals
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 300px;
  display: flex;
  justify-content: center;

  &__box {
    width: 250px;
    height: fit-content;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.547)
    );
    box-shadow: 0px 0px 3px rgb(117, 117, 117);
    border-radius: 3px;
    margin: 10vh 0;
  }
}

.category {
  &__box {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 10px 8px 10px;
    color:rgb(10,10,10);
  }

  &__box:first-of-type {
    border-radius: 3px 3px 0 0;
  }

  &__box:last-of-type {
    border-radius: 0 0 3px 3px;
  }

  &__box:not(:last-of-type) {
    border-bottom: 1px solid rgb(57, 57, 57);
  }

  &__box:hover {
    background: rgb(41, 44, 56);
    color:#eee;
  }

  &__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #eee;
    box-shadow: 0px 0px 3px #000;
  }

  &__text {
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight: 700;
  }
}
</style>

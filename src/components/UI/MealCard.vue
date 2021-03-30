<template>
  <MealModal
    v-if="isModalOpen"
    @close="setModalClose"
    :mealId="mealId"
  />
  <div
    class="mealCard"
    v-for="meal in categoryMeals"
    :key="meal.idMeal"
    @click="setModalOpen(meal.idMeal)"
  >
    <div class="mealCard--cover"></div>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="mealCard__photo"
    />
    <div class="mealCard__enter">
      <Link class="mealCard__enter-img" />
    </div>

    <div class="mealCard__content">
      <div class="mealCard__heading">{{ meal.strMeal }}</div>
      <div class="mealCard__rate">
        <Star class="mealCard__rate--star" />
        <Star class="mealCard__rate--star" />
        <Star class="mealCard__rate--star" />
        <Star class="mealCard__rate--star" />
        <Star class="mealCard__rate--star" />
      </div>

    </div>
    <button class="mealCard__add" @click.stop="favoriteRecipe($event)">
      View recipe
    </button>
    <!-- <h3 class="view">View Recipe</h3> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from 'vue'
import recipeStore from '@/store/recipe'

// UI
import Star from '@/components/UI/Icon/Star.vue'
import Link from '@/components/UI/Icon/Link.vue'

import MealModal from '@/components/recipe/MealModal.vue'

export default defineComponent({
  components: {
    MealModal,
    Star,
    Link
  },
  setup () {
    const store = inject('store', recipeStore)
    const categoryMeals = computed(() => store.getters.getMeals)
    const mealId = ref('')

    /** Modal control */
    const modalStatus = ref(false)
    const isModalOpen = computed(() => {
      return modalStatus.value
    })

    const setModalOpen = (id: string) => {
      modalStatus.value = true
      mealId.value = id
      document.body.style.overflow = 'hidden'
    }

    const setModalClose = () => {
      modalStatus.value = false
    }

    const favoriteRecipe = (event: MouseEvent) => {
      console.log('add recipe', event)
    }

    return {
      setModalOpen,
      mealId,
      modalStatus,
      isModalOpen,
      categoryMeals,
      setModalClose,
      favoriteRecipe
    }
  }
})
</script>

<style lang="scss" scoped>
.mealCard {
  min-width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  padding: 10px;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }

  &:hover {
    box-shadow: -1px 0px 10px rgba(92, 92, 92, 0.21);
    z-index: 1;
  }

  &:hover &--cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.48);
    transition: 0.3s ease all;
    z-index: 3;
  }

  &__photo {
    width: 100%;
    height: auto;
    display: block;
    transition: 0.3s transform ease;
  }

  &:hover &__photo {
    transform: scale(0.96);
  }

  &__content {
    width: 100%;
    height: 220px;
    transition: 0.26s all ease-out;
    padding: 0 10px 0 10px;
    z-index: 3;
    opacity: 1;
    font-size: 1.2rem;
    position: relative;
  }

  &__heading {
    color: #d57d1f;
    position: relative;
    font-weight: 400;
    font-size: 1.3rem;
    display: flex;
    align-items: flex-end;
    transition: all 0.2s linear;
    /**
    *  @refer https://jiaming0708.github.io/2019/04/16/flex-text-overflow/
    *
    */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover &__heading {
    transform: translateY(-80px);
    color: #f14242;
    white-space: normal;
  }

  &__rate {
    width: 100%;
    height: auto;
    transition: all 0.2s linear;
    transition: 0.25s all ease;
  }

  &__rate--star {
    fill: #fdb926;
    width: 12px;
    margin: 0 2px;
  }

  &:hover &__rate {
    transform: translateY(-80px);
    transition: transform 0.2s ease-out;
  }

  &__add {
    font-size: 1.2rem;
    padding: 5px 0;
    width: 60%;
    border-radius: 23px;
    outline: none;
    border: none;
    color: #fff;
    background: #ffc139;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    transition: 0.25s all ease;
    position:absolute;
    bottom:2rem;
    left:50%;
    transform:translate(-50%, 200%);
    z-index:5;

    &:hover {
      background: #333;
      color: #fdb926;
    }
  }

  &:hover &__add {
    transform: translate(-50%, 0);
  }

  &__enter {
    position: absolute;
    top:7rem;
    left: 128px;
    z-index: 4;
    opacity: 1;
    transition: 0.25s all ease;
    transition-delay: 0.1s;
    transform: translatex(-20px);
    opacity: 0;

    &-img {
      width: 40px;
      height: auto;
      fill: #333;
      background-size: 50px 50px;
    }
  }

  &:hover &__enter {
    opacity:1;
    transform: translatex(0px);
  }
}

</style>

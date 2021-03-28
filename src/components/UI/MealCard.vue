<template>
  <MealModal
    v-if="isModalOpen"
    @close="setModalClose"
    :mealId="mealId"
  />
  <div class="card" style="--grid-col-fr: 3">
    <div
      class="card__box"
      v-for="meal in categoryMeals"
      :key="meal.idMeal"
      @click="setModalOpen(meal.idMeal)"
    >
      <div class="card__box__top">
        <div class="card__box--cover"></div>
        <div class="card__pic">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="card__img"
          />
          <div class="enter">
            <Link class="enter__img" />
          </div>
        </div>
        <div class="card__content">
          <div class="card__content__left">
            <div class="card__title">
              <div class="card__title__text">{{ meal.strMeal }}</div>
            </div>
            <div class="card__rate">
              <Star class="star" />
              <Star class="star" />
              <Star class="star" />
              <Star class="star" />
              <Star class="star" />
            </div>
          </div>
          <button class="card__add" @click.stop="favoriteRecipe($event)">
            Save recipe
          </button>
        </div>
      </div>
      <!-- <h3 class="view">View Recipe</h3> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from 'vue'
import recipeStore from '@/store/recipe'

export default defineComponent({
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
.card {
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(var(--grid-col-fr, 3), 1fr);
  grid-gap: 10px;
  justify-items: end;

  &:empty {
    background:red;
  }

  &__box {
    color: #fff;
    max-width: 300px;
    width: 100%;
    height: 370px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin: 0 0 10px 0;
    padding: 10px;
    transition: 0.3s all ease;
    position: relative;
    transform: scale(1);
    overflow: hidden;

    &:hover {
      transform: scale(1.04);
      box-shadow: -1px 0px 10px rgba(92, 92, 92, 0.21);
      z-index: 1;
    }
  }

  &__box--cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: 0.3s ease all;
    z-index: 2;
  }

  &__box:hover &__box--cover {
    opacity: 0.89;
  }

  &__pic {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__img {
    width: 100%;
    height: auto;
    display: block;
    transition: 0.3s transform ease;
  }

  &__box:hover &__img {
    transform: scale(0.98);
  }

  &__content {
    width: 100%;
    height: 156px;
    transform: translateY(-20%);
    transition: 0.26s transform ease-out;
    padding: 0 10px 0 10px;
    z-index: 3;
    opacity: 1;
    font-size: 1.2rem;
    position: relative;
  }

  &__box:hover &__content {
    transform: translateY(-70%);
  }

  &__title {
    color: #d57d1f;
    position: relative;
    font-weight: 400;
    font-size: 18px;
    height: 80px;
    display: flex;
    align-items: flex-end;

    &__text {
      //  https://jiaming0708.github.io/2019/04/16/flex-text-overflow/
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &__box:hover &__title__text {
    color: #f14242;
    white-space: normal;
  }

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

  &__box:hover &__add {
    transform: translateY(20%);
  }
}

.enter {
  position: absolute;
  top: 35%;
  left: 42%;
  z-index: 4;
  opacity: 1;
  transition: 0.3s all ease;
  transition-delay: 0.15s;
  transform: translatex(-20px);
  opacity: 0;

  &__img {
    width: 40px;
    height: auto;
    fill: #333;
    background-size: 50px 50px;
  }
}

.card__box:hover .enter {
  opacity: 1;
  transform: translatex(0px);
}

.star {
  fill: #fdb926;
  width: 12px;
  margin: 0 2px;
}
</style>

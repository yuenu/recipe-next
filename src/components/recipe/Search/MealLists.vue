<template>
  <div class="meals-list">
    <MealModal
      v-if="isModalOpen"
      @close="onModalClose"
      :mealId="mealId"
    />
    <div v-if="isEmpty" class="dataEmpty">
      <h2 class="dataEmpty-text">{{ t('noResult') }}</h2>
    </div>
    <div v-else-if="!isEmpty" class="card">
      <div
        class="card__box"
        v-for="meal in handlePageMeals"
        :key="meal.idMeal"
      >
        <div class="card__box__top">
          <div class="card__box__cover"></div>
          <div class="card__pic">
            <CardSkeleton
              v-imageLoad="{
                src: meal.strMealThumb,
                alt: meal.strMeal,
                className: 'card__img',
              }"
            />
            <div class="collect">
              <HeartIcon
                class="collect__img"
                :collected="meal.collected"
                @click="handleCollection(meal)"
              />
            </div>
          </div>
          <div class="card__content">
            <div class="card__title">
              <div class="card__title__text">{{ meal.strMeal }}</div>
            </div>
            <div class="card__rate">
              <StarIcon />
            </div>

            <button
              class="card__hovered"
              @click.stop="onModalOpen(meal.idMeal)"
            >
              View recipe
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination :getMeals="getMeals" @changePage="changePage" />
    <Donate />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject, watchEffect } from 'vue'
import RecipeStore, { CollectionMealType } from '@/store'

import MealModal from '@/components/recipe/MealModal.vue'
import Pagination from './Pagination.vue'
import CardSkeleton from '@/components/recipe/Search/CardSkeleton.vue'
import Donate from '@/components/recipe/Search/Donate.vue'

import HeartIcon from '@/components/UI/Icon/Heart.vue'
import StarIcon from '@/components/UI/Icon/Star.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    MealModal,
    StarIcon,
    Pagination,
    CardSkeleton,
    Donate,
    HeartIcon
  },
  inject: ['store'],
  setup () {
    const { t } = useI18n()
    const store = inject('store', RecipeStore)

    const getMeals = computed(() => store.getters.getMeals)
    // const isLoading = computed(() => store.getters.getDataIsLoading)

    /** Modal controal */
    const modalStatus = ref(false)
    const mealId = ref('')

    function onModalOpen (id: string) {
      modalStatus.value = true
      mealId.value = id
      document.body.style.overflow = 'hidden'
    }

    function onModalClose () {
      modalStatus.value = !modalStatus.value
      document.body.style.overflow = 'auto'
    }
    const isModalOpen = computed(() => {
      return modalStatus.value
    })

    /** Pagnation */
    const currentPage = ref(1)
    const onePageMealsCount = 6

    function changePage (page: number) {
      currentPage.value = page
    }

    /** Collection */
    function handleCollection (meal: CollectionMealType) {
      store.ADD_COLLECTED_RECIPE(meal)
    }

    const handlePageMeals = computed(() => {
      return getMeals.value.filter((_, index) => {
        if (currentPage.value === 1) {
          return index < onePageMealsCount * currentPage.value
        } else {
          return (
            index >= onePageMealsCount * (currentPage.value - 1) &&
            index < onePageMealsCount * currentPage.value
          )
        }
      })
    })

    /** Card skeleton */
    const isEmpty = ref(true)
    const isSearched = computed(() => store.getters.getSearchName)

    watchEffect(() => {
      isEmpty.value = !(getMeals.value && getMeals.value.length !== 0)
      currentPage.value = isSearched.value ? 1 : currentPage.value
    })

    return {
      t,
      getMeals,
      isModalOpen,
      onModalOpen,
      onModalClose,
      mealId,
      changePage,
      handlePageMeals,
      isEmpty,
      handleCollection
    }
  }
})
</script>

<style lang="scss" scoped>
.meals-list {
  min-height: 960px;
  height: 100%;
}

.card {
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: end;

  &__box {
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

    &__cover {
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

    &__top {
      width: 100%;
    }
  }

  &__box:hover &__box__cover {
    opacity: 0.89;
  }

  &__pic {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
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

  &__hovered {
    margin-top: 1.8rem;
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

    &:hover {
      background: #333;
      color: #fdb926;
    }
  }

  // &__box:hover &__hovered {
  //   transform: translateY(20%);
  // }
}

.collect {
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
    background-size: 50px 50px;
  }
}

.card__box:hover .collect {
  opacity: 1;
  transform: translatex(0px);
}

.star {
  fill: #fdb926;
  width: 12px;
  margin: 0 2px;
}

.meals-list {
  width: 100%;
  margin: 0 0 0 16px;
}

.dataEmpty {
  width: 100%;
  height: 770px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;

  &-text {
    color: #fdb926;
  }
}

@media (max-width: 1100px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    &__box {
      max-width: 300px;
    }
  }
}

@media (max-width: 940px) {
  .card {
    grid-template-columns: repeat(3, 1fr);

    &__box {
      max-width: 250px;
      transition: unset;

      &:hover {
        transform: scale(1);
        box-shadow: inset;
      }
    }

    &__box__top {
      height: 100%;
    }

    &__box__cover {
      display: none;
    }

    &__pic {
      height: 55%;
    }

    &__content {
      height: 45%;
      justify-content: space-around;
      transform: translateY(0);
      display: flex;
      flex-direction: column;
    }

    &__box:hover &__content {
      transform: translateY(0);
    }

    &__box:hover &__hovered {
      transform: translateY(0);
    }

    &__title {
      margin-top: 5px;
      font-size: 16px;
      height: auto;
      align-items: flex-start;

      &__text {
        white-space: normal;
      }
    }

    &__hovered {
      padding: 5px;
    }
  }

  .collect {
    display: none;
  }
}

@media (max-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr);

    &__box {
      max-width: 250px;
    }
  }
}

@media (max-width: 650px) {
  .meals-list {
    margin: 0;
  }
  .card {
    justify-items: center;
  }
}

@media (max-width: 476px) {
  .card {
    grid-template-columns: repeat(1, 1fr);

    &__box {
      max-width: max-content;
      height: fit-content;
      margin: 0;
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    &__box__top {
      display: flex;
    }

    &__pic {
      justify-content: center;
      align-items: flex-start;
      min-width: 100px;
    }

    &__img {
      width: 100px;
      height: 100px;
    }

    &__content {
      height: auto;
      display: flex;
      justify-content: space-between;
    }

    &__title {
      margin-top: 0px;
    }

    &__box:hover &__img {
      transform: scale(1);
    }

    &__hovered {
      padding: 3px;
      border-radius: 0;
      float: right;
      bottom: 0;
    }
  }

  .view {
    color: #eee;
    display: block;
    background: #333;
    text-align: center;
    padding: 3px 0;
  }

  .meals-list {
    width: 100%;
    margin: 0 3px;
  }
}
</style>

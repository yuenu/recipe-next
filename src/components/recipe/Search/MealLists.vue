<template>
  <div class="cards__container">
    <MealModal
      v-if="isModalOpen"
      @close="setModalClose"
      :mealId="mealId"
    />
    <div v-if="dataIsEmpty" class="dataEmpty" >
      <h2 class="dataEmpty-text">No Data</h2>
    </div>
    <div v-else-if="!dataIsEmpty" class="card" >
      <div
        class="card__box"
        v-for="meal in handlePageMeals"
        :key="meal.idMeal"
        @click="setModalOpen(meal.idMeal)"
      >
        <div class="card__box__top">
          <div class="card__box__cover"></div>
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
    </div>
    <Pagination :getMeals="getMeals" @changePage="changePage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch, inject } from 'vue'
import recipeStore from '@/store/index'
import MealModal from '@/components/recipe/MealModal.vue'
import Link from '@/components/UI/Icon/Link.vue'
import Star from '@/components/UI/Icon/Star.vue'
import Pagination from './Pagination.vue'

export default defineComponent({
  components: {
    MealModal,
    Link,
    Star,
    Pagination
  },
  inject: ['store'],
  setup () {
    const store = inject('store', recipeStore)
    const dataIsEmpty = ref(true)

    const getMeals = computed(() => {
      return store.getters.getMeals
    })

    const modalStatus = ref(false)
    const mealId = ref('')

    function setModalOpen (id: string) {
      modalStatus.value = true
      mealId.value = id
      document.body.style.overflow = 'hidden'
    }

    function setModalClose () {
      modalStatus.value = !modalStatus.value
      document.body.style.overflow = 'auto'
    }
    const isModalOpen = computed(() => {
      return modalStatus.value
    })

    const currentPage = ref(1)
    const onePageMealsCount = 6

    function changePage (page: number) { currentPage.value = page }

    const handlePageMeals = computed(() => {
      return getMeals.value.filter((_, index) => {
        if (currentPage.value === 1) {
          return index < (onePageMealsCount * currentPage.value)
        } else {
          return (index >= (onePageMealsCount * (currentPage.value - 1))) && (index < (onePageMealsCount * currentPage.value))
        }
      })
    })

    function favoriteRecipe (event: MouseEvent) {
      console.log('add recipe', event)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(getMeals, (_val, _oldVal) => {
      dataIsEmpty.value = false
    })

    onMounted(() => {
      dataIsEmpty.value = true
    })

    return {
      getMeals,
      isModalOpen,
      setModalOpen,
      setModalClose,
      mealId,
      favoriteRecipe,
      changePage,
      handlePageMeals,
      dataIsEmpty
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

  &__box__cover {
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

  &__box:hover &__box__cover {
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

.cards__container {
  width: 100%;
  margin: 0 0 0 16px;
}

.dataEmpty {
  width:100%;
  height:770px;
  border:1px solid #ddd;
  display:flex;
  justify-content: center;
  align-items:center;

  &-text {
    color:#fdb926;
  }
}

@media (max-width: 1100px) {
  .card {
    grid-template-columns: repeat(2, 1fr);

    &__box {
      max-width: 350px;
    }

    &__img {
      width: 80%;
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

    &__box__cover {
      display: none;
    }

    &__img {
      width: 100%;
    }

    &__content {
      transform: translateY(0);
    }

    &__box:hover &__content {
      transform: translateY(0);
    }

    &__box:hover &__add {
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

    &__add {
      transform: translateY(0);
      padding: 5px;
    }
  }

  .enter {
    display: none;
  }
}

@media (max-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr);

    &__box {
      max-width: 250px;
    }

    &__img {
      width: 90%;
    }
  }
}

@media (max-width: 650px) {
  .cards__container {
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
    }

    &__img {
      width: 100px;
      height: 100px;
    }

    &__content {
      height: auto;
      display: flex;
      justify-content: space-between;
      padding: 0 0 0 6px;
    }

    &__content__left {
      width: 170px;
    }

    &__title {
      margin-top: 0px;
    }

    &__box:hover &__img {
      transform: scale(1);
    }

    &__add {
      padding: 3px;
      border-radius: 0;
      float: right;
      width: 90px;
    }
  }

  .view {
    color: #eee;
    display: block;
    background: #333;
    text-align: center;
    padding: 3px 0;
  }

  .cards__container {
    width: 100%;
    margin: 0 3px;
  }
}
</style>

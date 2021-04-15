<template>
  <div class="carouselNav">
    <h2 class="carouselNav__title">Meal Cateories</h2>
    <Arrow :class="['arrow__left', { hidden: leftHidden }]" @click="prev" />
    <Arrow :class="['arrow__right', { hidden: rightHidden }]" @click="next" />
    <div class="category" ref="carosuel">
      <div
        class="category__box"
        v-for="cat in categories"
        :key="cat.idCategory"
        @click="getCatgoryMeals(cat.strCategory)"
        ref="mealBox"
      >
        <img
          class="category__img"
          :src="cat.strCategoryThumb"
          :alt="cat.strCategory"
        />
        <p class="category__text">{{ cat.strCategory }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue'
import RecipeStore from '@/store/index'

export default defineComponent({
  setup () {
    /**
     * Get categories data
     */
    const sliderIndex = ref(0)
    const categories = computed(() => RecipeStore.getters.getCategory)

    const getCatgoryMeals = (category: string) => {
      RecipeStore.GET_MEALS_BY_CATEGORY(category)
    }

    /**
     * Slide Control
     *
     * @param {HTMLElement} carosuel - carosuel container
     * @param {boolean} leftHidden - control left arrow display
     * @param {boolean} rightHidden - control right arrow display
     * @param {number} counter - slide count
     * @param {number} size - container translateX size
     * @param {number} totlaSlideCount - Count the slide count which container only show 6 categories
     */
    const carosuel = ref<HTMLElement | null>(null)
    const mealBox = ref<HTMLElement | null>(null)
    const leftHidden = ref(false)
    const rightHidden = ref(false)
    const counter = ref(0)
    const size = 541
    // const totalCount = 0
    const totlaSlideCount = 2

    const next = () => {
      if (carosuel.value && counter.value < totlaSlideCount) {
        counter.value++
        carosuel.value.style.transform =
          'translateX(' + -size * counter.value + 'px)'
      }
    }

    const prev = () => {
      if (carosuel.value && counter.value > 0) {
        counter.value--
        carosuel.value.style.transform =
          'translateX(' + -size * counter.value + 'px)'
      }
    }

    watchEffect(() => {
      leftHidden.value = counter.value === 0
      rightHidden.value = counter.value === totlaSlideCount
    })

    return {
      sliderIndex,
      categories,
      getCatgoryMeals,
      next,
      prev,
      carosuel,
      mealBox,
      leftHidden,
      rightHidden
    }
  }
})
</script>
<style lang="scss" scoped>
.carouselNav {
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(175, 175, 175);
  height: 170px;
  padding: 0 10px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.151),
    rgba(255, 255, 255, 0.42)
  );

  &__title {
    padding: 5px 0;
    text-align: center;
    color: #d57d1f;
    border-bottom: 3px solid #f14242;
    border-radius: 2px;
  }
}

.category {
  height: 130px;
  position: relative;
  display: flex;
  transition: 0.5s transform ease;

  &__box {
    margin: auto 10px;
    cursor: pointer;
    max-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #eee;
    box-shadow: 0px 0px 3px #000;
    margin: 0 auto;
    user-select: none;
  }

  &__text {
    font-size: 0.7rem;
    width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 6px;
  }

  :hover &__title {
    white-space: normal;
  }
}

.arrow__left,
.arrow__right {
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-out;
  background: #20ad96;
  padding: 4px 0;
  pointer-events: auto;

  &:hover {
    fill: #000;
  }
}

.arrow__left {
  left: 0;
  transform: rotate(180deg);
}

.arrow__right {
  right: 0;
}

.arrow__left.hidden,
.arrow__right.hidden {
  opacity: 0;
  pointer-events: none;
}
</style>

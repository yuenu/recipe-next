<template>
  <div>
    <div
      class="categoryList-meals--display"
      ref="slideEl"
      v-on="{
        mousedown: touchStart(),
        mouseup: touchEnd,
        mousemove: touchMove,
        mouseleave: touchMove,
        'touchstart.passive': touchStart(),
        touchend: touchEnd,
        touchmove: touchMove,
      }"
    >
      <div class="categoryList-meals" ref="slideBoxEl">
        <MealCard @modalStatus="onModalOpen" />
      </div>
    </div>
    <div class="pagination u-text-align-center">
      <ul class="pagination__list">
        <li
          v-for="dot in imagesLen"
          :key="dot"
          class="pagination__item"
        >
          <span
            :class="['pagination__link', { active: dot - 1 === currentIndex }]"
            @click="changePageIndex(dot)"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  inject,
  ref,
  onMounted,
  watch,
  nextTick
} from 'vue'
import RecipeStore from '@/store/index'
import MealCard from '@/components/UI/MealCard.vue'

export default defineComponent({
  components: {
    MealCard
  },
  injects: ['store'],
  props: {
    fetchDone: {
      type: Boolean
    }
  },
  setup (prop) {
    // API DATA
    const store = inject('store', RecipeStore)
    const getMealsData = computed(() => {
      return store.getters.getMeals
    })

    /** Display on list which meal of numbers */
    const displayMeals = ref(4)

    const mealCounting = computed(() => getMealsData.value.length)
    const imagesLen = computed(() =>
      Math.ceil(mealCounting.value / displayMeals.value)
    )

    /** The col's width, to calculate transition */
    const columnWidth = ref(1360)
    const isDragging = ref(false)
    const startPos = ref(0)
    const currentTranslate = ref(0)
    const prevTranslate = ref(0)

    /** To store animation id, reset the deley time */
    const animationID = ref(0)

    /** To calculate the pagination */
    const currentIndex = ref(0)
    const mealCards = ref<NodeListOf<HTMLElement>>()

    /** Touch slide */
    const slideEl = ref<HTMLInputElement>()
    const slideBoxEl = ref<HTMLInputElement>()

    function setSliderPosition () {
      if (!slideBoxEl.value) return
      slideBoxEl.value.style.transform = `translateX(${currentTranslate.value}px)`
    }

    function setPositionByIndex () {
      currentTranslate.value = currentIndex.value * -columnWidth.value
      prevTranslate.value = currentTranslate.value
      setSliderPosition()
    }

    function animation () {
      setSliderPosition()
      if (isDragging.value) requestAnimationFrame(animation)
    }

    function getPositionX (event: MouseEvent | TouchEvent) {
      return event.type.includes('mouse')
        ? (event as MouseEvent).pageX
        : (event as TouchEvent).touches[0].clientX
    }

    function touchStart () {
      return function (event: MouseEvent | TouchEvent) {
        isDragging.value = true
        startPos.value = getPositionX(event)

        animationID.value = requestAnimationFrame(animation)
        if (slideEl.value) {
          slideEl.value.classList.add('grabbing')
        }
      }
    }

    function touchEnd () {
      isDragging.value = false
      cancelAnimationFrame(animationID.value)

      const movedBy = currentTranslate.value - prevTranslate.value

      if (movedBy < -100 && currentIndex.value < imagesLen.value - 1) {
        currentIndex.value += 1
      }

      if (movedBy > 100 && currentIndex.value > 0) currentIndex.value -= 1

      setPositionByIndex()

      if (slideEl.value) {
        slideEl.value.classList.remove('grabbing')
      }
    }

    function touchMove (event: MouseEvent | TouchEvent) {
      if (isDragging.value) {
        const currentPosition = getPositionX(event)
        currentTranslate.value =
          prevTranslate.value + currentPosition - startPos.value
      }
    }

    /** Pagation */
    function changePageIndex (page: number) {
      currentIndex.value = page - 1
      setPositionByIndex()
    }

    const timeoutId = ref(0)

    /** ResizeObserver api */
    const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!mealCards.value) return
      // Reset timeout
      window.clearTimeout(timeoutId.value)

      const cr = entries[0].contentRect
      // Detect the window width size, and change card's width
      for (const card of mealCards.value) {
        if (cr.width >= 1313) {
          displayMeals.value = 4
          card.style.minWidth = (cr.width - 40 * 4) / displayMeals.value + 'px'
        } else if (cr.width >= 930) {
          displayMeals.value = 4
          card.style.minWidth = (cr.width - 24 * 4) / displayMeals.value + 'px'
        } else if (cr.width >= 476) {
          displayMeals.value = 2
          card.style.minWidth = (cr.width - 24 * 2) / displayMeals.value + 'px'
        } else {
          displayMeals.value = 1
          card.style.minWidth = (cr.width - 24 * 1) / displayMeals.value + 'px'
        }
      }
      columnWidth.value = cr.width
      // To deley the detect
      timeoutId.value = setTimeout(() => {
        currentIndex.value = 0
        setPositionByIndex()
      }, 500)
    })

    onMounted(async () => {
      if (getMealsData.value.length === 0) {
        await store.GET_MEALS_BY_CATEGORY('Beef')
      }

      if (slideEl.value) {
        ro.observe(slideEl.value)
        mealCards.value = document.querySelectorAll<HTMLInputElement>('.mealCard')
      }
    })

    watch(getMealsData, val => {
      if (val) {
        currentIndex.value = 0
        startPos.value = 0
        currentTranslate.value = 0
        setPositionByIndex()
      }
    })

    async function calcCardMinWidth () {
      await nextTick(() => {
        mealCards.value = document.querySelectorAll<HTMLInputElement>('.mealCard')
        for (const card of mealCards.value) {
          if (slideEl.value) {
            card.style.minWidth = (slideEl.value.clientWidth - 24 * 4) / 4 + 'px'
          }
        }
      })
    }

    function onModalOpen (isModalOpen: boolean) {
      if (slideEl.value && isModalOpen) {
        ro.unobserve(slideEl.value)
      }
    }

    watch(prop, val => {
      if (val) {
        calcCardMinWidth()
      }
    })

    return {
      slideEl,
      slideBoxEl,
      imagesLen,
      currentIndex,
      changePageIndex,
      touchStart,
      touchEnd,
      touchMove,
      onModalOpen
    }
  }
})
</script>

<style lang="scss" scoped>
.categoryList-meals--display {
  width: 100%;
  overflow: hidden;
}

.categoryList-meals {
  width: 100%;
  height: auto;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.03, -0.05, 0.01, 1.02);
  user-select: none;
  will-change: transform;
}

.pagination {
  &__item {
    display: inline-block;
    margin: 20px 10px 0 10px;
  }

  &__link {
    position: relative;
    text-indent: -99em;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid $color-gray-dark-1;
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &:before {
      background: $color-gray-dark-1;
      transform: scale(0.2);
    }
    &:hover {
      &:after {
        transform: scale(1.1);
      }
    }
    &.active {
      &:before {
        transform: scale(0.5);
      }
      &:after {
        transform: scale(0.2);
      }
    }
  }
}

.grabbing {
  cursor: grabbing;
}
</style>

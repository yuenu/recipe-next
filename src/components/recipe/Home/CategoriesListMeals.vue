<template>
  <div class="categoryList-meals--display" ref="slide">
    <div class="categoryList-meals" ref="slideBox">
      <MealCard />
    </div>
  </div>
  <div class="pagination u-text-align-center">
    <ul class="pagination__list">
      <li
        v-for="dot in imagesLen"
        :key="dot"
        class="pagination__item"
      >
        <span :class="['pagination__link', { active: (dot - 1) === currentIndex}]"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  inject,
  ref,
  onMounted,
  onBeforeUnmount,
  watch
} from 'vue'
import recipeStore from '@/store/recipe'
import MealCard from '@/components/UI/MealCard.vue'

export default defineComponent({
  components: {
    MealCard
  },
  injects: ['store'],
  setup () {
    // API DATA
    const store = inject('store', recipeStore)
    const getMeals = computed(() => {
      return store.getters.getMeals
    })

    const mealCounting = computed(() => getMeals.value.length)
    const imagesLen = computed(() => Math.ceil(mealCounting.value / 4))

    const columnWidth = 1360
    const isDragging = ref(false)
    const startPos = ref(0)
    const currentTranslate = ref(0)
    const prevTranslate = ref(0)
    const animationID = ref(0)
    const currentIndex = ref(0)

    // Touch Slide
    const slide = ref<HTMLElement>()
    const slideBox = ref<HTMLInputElement>()

    function setSliderPosition () {
      if (!slideBox.value) return
      slideBox.value.style.transform = `translateX(${currentTranslate.value}px)`
    }

    function setPositionByIndex () {
      currentTranslate.value = currentIndex.value * -columnWidth
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
        event.stopPropagation()
        isDragging.value = true
        startPos.value = getPositionX(event)

        animationID.value = requestAnimationFrame(animation)
        if (slide.value) {
          slide.value.classList.add('grabbing')
        }
      }
    }

    function touchEnd () {
      isDragging.value = false
      cancelAnimationFrame(animationID.value)

      const movedBy = currentTranslate.value - prevTranslate.value

      if (movedBy < -100 && currentIndex.value < imagesLen.value - 1) currentIndex.value += 1

      if (movedBy > 100 && currentIndex.value > 0) currentIndex.value -= 1

      setPositionByIndex()
    }

    function touchMove (event: MouseEvent | TouchEvent) {
      if (isDragging.value) {
        const currentPosition = getPositionX(event)
        currentTranslate.value =
          prevTranslate.value + currentPosition - startPos.value
      }
    }

    onMounted(async () => {
      if (getMeals.value.length === 0) {
        await store.GET_MEALS_BY_CATEGORY('Beef')
      }

      if (slide.value) {
        // Touch events
        slide.value.addEventListener('touchstart', touchStart(), {
          passive: true
        })
        slide.value.addEventListener('touchend', touchEnd, { passive: true })
        slide.value.addEventListener('touchmove', touchMove, { passive: true })

        // Mouse events
        slide.value.addEventListener('mousedown', touchStart(), {
          passive: true
        })
        slide.value.addEventListener('mouseup', touchEnd, { passive: true })
        slide.value.addEventListener('mouseleave', touchEnd, { passive: true })
        slide.value.addEventListener('mousemove', touchMove, { passive: true })
      }
    })

    onBeforeUnmount(() => {
      // removeEventListener
      if (slide.value) {
        slide.value.removeEventListener('touchstart', touchStart())
        slide.value.removeEventListener('touchend', touchEnd)
        slide.value.removeEventListener('touchmove', touchMove)

        slide.value.removeEventListener('mousedown', touchStart())
        slide.value.removeEventListener('mouseup', touchEnd)
        slide.value.removeEventListener('mouseleave', touchEnd)
        slide.value.removeEventListener('mousemove', touchMove)
      }
    })

    watch(getMeals, val => {
      if (val) {
        currentIndex.value = 0
        startPos.value = 0
        currentTranslate.value = 0
      }
    })

    return {
      getMeals,
      slide,
      slideBox,
      imagesLen,
      currentIndex
    }
  }
})
</script>

<style lang="scss" scoped>
$clouds: #333;
.categoryList-meals--display {
  width: 100%;
  will-change: transform;
  overflow: hidden;

}

.categoryList-meals {
  width: 100%;
  height: 500px;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.03, -0.05, 0, 1.35);
  user-select: none;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 7px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #fdb926;
    transform: scale(1.2);
  }
}

.pagination {
  &__item {
    display: inline-block;
    margin: 0 10px;
  }

  &__link {
    position: relative;
    text-indent: -99em;
    // overflow: hiddn;
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
      border: 3px solid $clouds;
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &:before {
      background: $clouds;
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
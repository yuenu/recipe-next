<template>
  <div class="categoryList-meals--display" v-pan="onPan">
    <div class="categoryList-meals" ref="categoryList">
      <MealCard />
    </div>
  </div>
  <div class="pagination u-text-align-center">
    <ul class="pagination__list">
      <li class="pagination__item"><a href="#" class="pagination__link active"></a></li>
      <li
        v-for="dot in imagesLen"
        :key="dot"
        class="pagination__item"
      ><span class="pagination__link"></span></li>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, onMounted, ref, watch } from 'vue'
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

    // Images index
    const sliderIndex = ref(1)

    // Meals display
    const categoryList = ref<HTMLElement>()

    const currentOffset = ref(0)

    const overflowRatio = computed(() => {
      return (
        (categoryList.value as HTMLElement).scrollWidth /
        (categoryList.value as HTMLElement).offsetWidth
      )
    })

    const itemWidth = computed(() => {
      return (
        (categoryList.value as HTMLElement).scrollWidth / mealCounting.value
      )
    })
    // Drag animation
    const onPan = e => {
      if (!categoryList.value) {
        return
      }

      const dragOffset = computed(() => {
        return (
          (((100 / itemWidth.value) * e.deltaX) / mealCounting.value) *
          overflowRatio.value
        )
      })

      const progress = computed(() => currentOffset.value + dragOffset.value)

      categoryList.value.style.setProperty('--x', progress.value.toString())

      if (e.isFinal) {
        currentOffset.value = progress.value
        const maxScroll = 100 - overflowRatio.value * 100

        // scrolled to last item
        if (currentOffset.value <= maxScroll) {
          currentOffset.value = maxScroll
        } else if (currentOffset.value >= 0) {
          // scroll to first item
          currentOffset.value = 0
        } else {
          // animate to next item according to pan direction
          const index =
            (currentOffset.value / overflowRatio.value / 100) *
            mealCounting.value
          const nextIndex = e.deltaX <= 0 ? Math.floor(index) : Math.ceil(index)
          currentOffset.value =
            ((100 * overflowRatio.value) / mealCounting.value) * nextIndex
        }

        categoryList.value.style.setProperty(
          '--x',
          currentOffset.value.toString()
        )
      }
    }

    watch(getMeals, () => {
      if (categoryList.value) {
        // Rest offset
        currentOffset.value = 0
        categoryList.value.style.setProperty('--x', '0')
      }
    })

    onMounted(async () => {
      if (getMeals.value.length === 0) {
        await store.GET_MEALS_BY_CATEGORY('Beef')
        console.log('overflowRatio', overflowRatio)
        console.log('itemWidth', itemWidth)
      }
    })

    return {
      getMeals,
      categoryList,
      onPan,
      imagesLen,
      sliderIndex
    }
  }
})
</script>

<style lang="scss" scoped>

$clouds: #333;
.categoryList-meals--display {
  overflow: hidden;
  width: 100%;
}

.categoryList-meals {
  width: 100%;
  height: 500px;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.03, -0.05, 0, 1.35);
  transform: translateX(calc(var(--x, 0) * 1.2%));
  will-change: transform;
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
    display:block;
    width: 30px;
    height: 30px;
    cursor:pointer;

    &:before,
    &:after {
      content: '';
      display:block;
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
      transform: scale(.2);
    }
    &:after {

    }
    &:hover {
      &:after {
        transform: scale(1.1);
      }
    }
    &.active {
      &:before {
        transform: scale(.5);
      }
      &:after {
        transform: scale(.2);
      }
    }
  }
}

</style>

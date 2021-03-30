<template>
  <div class="categoryList-meals--display" v-pan="onPan">
    <div class="categoryList-meals" ref="categoryList">
      <MealCard />
    </div>
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

    // Meals display
    const categoryList = ref<HTMLElement>()

    const currentOffset = ref(0)

    const overflowRatio = computed(() => {
      return (categoryList.value as HTMLElement).scrollWidth / (categoryList.value as HTMLElement).offsetWidth
    })

    const itemWidth = computed(() => {
      return (categoryList.value as HTMLElement).scrollWidth / mealCounting.value
    })

    const onPan = (e) => {
      const dragOffset = computed(() => {
        return 100 / itemWidth.value * e.deltaX / mealCounting.value * overflowRatio.value
      })

      const transform = computed(() => currentOffset.value + dragOffset.value)

      if (categoryList.value) {
        categoryList.value.style.setProperty('--x', transform.value.toString())
      }

      if (e.isFinal) {
        currentOffset.value = transform.value
        const maxScroll = 100 - overflowRatio.value * 100

        // scrolled to last item
        if (currentOffset.value <= maxScroll) {
          currentOffset.value = maxScroll
        } else if (currentOffset.value >= 0) {
          // scroll to first item
          currentOffset.value = 0
        } else {
          // animate to next item according to pan direction
          const index = currentOffset.value / overflowRatio.value / 100 * mealCounting.value
          const nextIndex = e.deltaX <= 0 ? Math.floor(index) : Math.ceil(index)
          currentOffset.value = 100 * overflowRatio.value / mealCounting.value * nextIndex
        }

        (categoryList.value as HTMLElement).style.setProperty('--x', currentOffset.value.toString())
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
      }
    })

    return {
      getMeals,
      categoryList,
      onPan
    }
  }
})
</script>

<style lang="scss" scoped>
.categoryList-meals--display {
  overflow: hidden;
  width:100%;
}

.categoryList-meals {
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(.03,-0.05,0,1.35);
  transform: translateX(calc(var(--x, 0) * 1%));
  will-change: transform;
}

.mealCard {
  min-width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  padding: 1.2rem 2rem;
  position:relative;
  transition:all 0.2 ease-out;
  cursor:pointer;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }

  &:hover &--cover {
    width:100%;
    height:100%;
    background: rgba(255,255,255,0.45);
    position:absolute;
    top:0;
    left:0;
  }

  &__photo {
    width: 250px;
    display: block;
    margin: 0 auto;
    user-select: none;
  }

  &__heading {
    font-size: 1.2rem;
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

  &:hover &__add {
    background: #333;
      color: #fdb926;
  }
}
</style>

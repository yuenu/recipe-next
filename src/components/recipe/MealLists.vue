<template>
  <MealModal
    v-if="isModalOpen"
    @close="setModalClose"
    :mealId="mealId"
  />
  <div class="cards">
    <div class="card">
      <div
        class="card__box"
        v-for="meal in searchedMeals"
        :key="meal.idMeal"
        @click="setModalOpen(meal.idMeal)"
      >
        <div class="card__pic">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="card__img"
          />
        </div>
        <div class="card__content">
          <div class="card__title">{{ meal.strMeal }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import MealModal from './MealModal.vue'

export default defineComponent({
  components: {
    MealModal
  },
  setup () {
    const store = useStore()
    const searchedMeals = computed(() => {
      return store.getters.getMeals
    })
    const mealId = ref('')

    // Modal status
    const modalStatus = ref(false)
    const setModalOpen = (id: string) => {
      modalStatus.value = true
      mealId.value = id
      document.body.style.overflow = 'hidden'
    }
    const setModalClose = () => {
      modalStatus.value = !modalStatus.value
      document.body.style.overflow = 'auto'
    }
    const isModalOpen = computed(() => {
      return modalStatus.value
    })

    return {
      searchedMeals,
      isModalOpen,
      setModalOpen,
      setModalClose,
      mealId
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  padding: 0 10px;
  height: fit-content;
  min-height: 600px;
  columns: 250px;
  column-gap: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.151),
    rgba(255, 255, 255, 0.42)
  );
  backdrop-filter: blur(10px);
  border-radius: 3px;

  &__box {
    break-inside: avoid;
    color: #ffffff;
    border-radius: 2px;
    max-width: 300px;
    width: 100%;
    height: 370px;
    min-height: 230px;
    margin: 0 auto;
    cursor: pointer;
    text-align: left;
    border: 1px solid #ccc;
    margin-bottom: 14px;
    overflow: hidden;
    transition: 0.3s all ease;

    &:hover {
      background: rgb(218, 218, 218);
    }
  }

  // &__box:first-of-type {
  //   margin-top: 0;
  // }

  &__pic {
    padding: 10px;
    background: #efe;
    margin-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 200px;
    height: 200px;
    display: block;
  }

  &__title {
    color: #d57d1f;
    font-size: 1rem;
    margin: 0 10px;
    position: relative;
    // font-family: 'Syne Tactile', cursive;
    font-weight: 600;
    letter-spacing: 1px;
  }

  &__box:hover &__title {
    color: #f14242;
  }
}
</style>

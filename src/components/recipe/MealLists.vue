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
  max-width: 600px;
  padding: 20px 10px;
  margin: 0 auto;
  height: fit-content;
  columns: 250px;
  column-gap: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.151),
    rgba(255, 255, 255, 0.42)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0px 2px 3px rgb(117, 117, 117);
  border-radius: 0px;
  margin-top: calc(10vh + 370px);
  margin-bottom: 2rem;
  border:1px solid #ccc;

  &__box {
    break-inside: avoid;
    color: #ffffff;
    border-radius: 5px;
    max-width: 250px;
    width: 100%;
    height: fit-content;
    min-height:274px;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    background:#eee;
    text-align: center;
    border:1px solid #ccc;
    margin-bottom:14px;
    overflow:hidden;

    &:hover {
      background: rgb(218, 218, 218);
    }
  }

  &__box:first-of-type {
    margin-top: 0;
  }

  &__pic {
    width:100%;
    height:100%;
    max-width: 250px;
    max-height:200px;
    overflow:hidden;
    margin-bottom:4px;
  }

  &__img {
    object-fit: cover;
    width: 100%;
    max-height:200px;
    border-radius:5px 5px 0 0;
    transition:all 500ms ease-in-out;
  }

  &__box:hover &__img {
    transform:scale(1.1);
  }

  &__title {
    color: #d57d1f;
    font-size: 1rem;
    margin:0 10px;
    position:relative;
    font-family:'Syne Tactile', cursive;
    font-weight:600;
    letter-spacing: 1px;

    &::before {
      content:'';
      width:0%;
      height:2px;
      background:red;
      position:absolute;
      bottom:-2px;
      left:0;
      transition:all 300ms ease;
    }

    &::before:hover {
      width:100%;
    }
  }
}

.card__box:hover .card__title {
  color:rgb(241, 66, 66);
}
</style>

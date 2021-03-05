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
        <div class="card__box__cover"></div>
        <div class="card__pic">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="card__img"
          />
          <div class="enter">
            <Enter class="enter__img" />
          </div>
        </div>
        <div class="card__content">
          <div class="card__title">{{ meal.strMeal }}</div>
          <button class="card__add" @click.capture="addRecipe">Add recipe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import MealModal from './MealModal.vue'
import Enter from '@/components/UI/Enter.vue'

export default defineComponent({
  components: {
    MealModal,
    Enter
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

    const addRecipe = () => { console.log('add recipe') }

    return {
      searchedMeals,
      isModalOpen,
      setModalOpen,
      setModalClose,
      mealId,
      addRecipe
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
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
    margin: 0 auto;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-bottom: 14px;
    transition: 0.3s all ease;
    position: relative;
    transform: scale(1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow:hidden;

    &:hover {
      transform: scale(1.04);
      box-shadow: -1px 0px 10px rgba(92, 92, 92, 0.21);
    }
  }

  &__box:first-of-type {
    margin-top: 0;
  }

  &__box__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    opacity: 0;
    height: 100%;
    transition: 0.3s ease all;
    z-index: 2;
  }

  &__box:hover &__box__cover {
    opacity: 0.6;
  }

  &__pic {
    padding: 10px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
  }

  &__img {
    margin-top: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
  }

  &__content {
    width:100%;
    height:156px;
    transform:translateY(0%);
    transition:0.3s all ease-out;
    padding: 0 10px 0 40px;
    letter-spacing: 1px;
    z-index: 3;
    opacity: 1;
    font-size: 1.2rem;
    position:relative;
  }

  &__box:hover &__content {
    transform:translateY(-10%);
  }

  &__title {
    color: #d57d1f;
    position: relative;
    font-weight: 600;
  }

  &__box:hover &__title {
    color: #f14242;
  }

  &__add {
    font-size:1.2rem;
    margin:0 auto;
    display:block;
    width:80%;
    padding:10px 22px;
    border-radius:23px;
    outline:none;
    border:none;
    color:#fff;
    background:#ffc139;
    cursor:pointer;
    position:absolute;
    bottom:16px;
    left:30px;
    font-family: 'Oswald', sans-serif;
    transform:translateY(200%);
    transition:0.25s ease all;
    pointer-events: none;

    &:hover {
      background:#333;
      pointer-events: auto;
    }
  }

  &__box:hover &__add {
    transform:translateY(40%);
  }
}

.enter {
  position:absolute;
  top:30%;
  left:30%;
  z-index:4;
  opacity:0;

  &__img {
    width:50px;
    height:auto;
    fill:#333;
    background-size: 50px 50px;
  }
}
</style>

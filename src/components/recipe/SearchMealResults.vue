<template>
  <div class="cards">
    <div class="card">
      <div
        class="card__box"
        v-for="meal in searchedMeals"
        :key="meal.idMeal"
      >
        <img
          :src="meal.strMealThumb + '/preview'"
          :alt="meal.strMeal"
          class="card__img"
        />
        <div class="card__content">
          <div class="card__title">{{ meal.strMeal }}</div>
          <div class="card__text">lerom this is sdafjasopfjaskfcmzkxlcm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()

    const searchedMeals = computed(() => {
      return store.getters.getMeals
    })

    console.log('searchedMeals', searchedMeals)

    return {
      searchedMeals
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
  columns: 2 auto;
  column-gap: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.151),
    rgba(255, 255, 255, 0.42)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0px 2px 5px #000;
  border-radius: 10px;
  margin-top: calc(10vh + 370px);
  margin-bottom: 2rem;

  &__box {
    break-inside: avoid;
    color: #ffffff;
    border-radius: 12px;
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    background: rgb(196, 196, 196);
    margin: 10px;
    text-align: center;
    padding: 0 20px;

    &:hover {
      background: rgb(190, 190, 190);
    }
  }

  &__box:first-of-type {
    margin-top: 0;
  }

  &__img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    margin: 20px 0 16px 0;
  }

  &__content {
    color: rgb(20, 20, 20);
  }

  &__title {
    font-size: 1.2rem;
    display: inline-block;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }
}
</style>

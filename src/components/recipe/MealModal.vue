<template>
  <base-modal>
    <div
      class="meal"
      v-for="meal in getMealInfo"
      :key="meal.idMeal"
    >
      <h1 class="meal__title">{{ meal.strMeal }}</h1>
      <div class="meal__media">
        <img
          :src="meal.strMealThumb"
          alt="img"
          class="meal__media__img"
        />
        <a
          :href="meal.strYoutube"
          class="meal__media__link"
          target="_blank"
        >
          Youtube
        </a>
      </div>
      <div class="meal__info">
        <h2 class="meal__info__title">information</h2>
        <p class="meal__info__content">
          {{ meal.strInstructions }}
        </p>
      </div>
      <div class="meal__ingrendients">
        <h2 class="meal__ingrendients__title">ingrendients</h2>

        <li
          class="meal__ingrendients__content"
          v-for="idx in 20"
          :key="idx"
        >
          {{ meal.strIngredient1}}
        </li>
      </div>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    mealId: String
  },
  setup (props) {
    const store = useStore()

    onMounted(() => {
      store.dispatch('GET_MEALS_BY_ID', props.mealId)
    })

    const getMealInfo = computed(() => {
      return store.getters.getMealInfo
    })

    if (getMealInfo.value) {
      console.log(getMealInfo)
    }

    return {
      getMealInfo
    }
  }
})
</script>

<style lang="scss" scoped>
.meal {
  max-width: 500px;
  width: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.945);
  box-shadow: 0px 2px 5px #fff;
  border-radius: 20px;
  padding: 10px 30px;
  position: absolute;
  top: 10vh;

  &__title {
    text-align: center;
    margin: 12px 0 20px 0;
  }

  &__media {
    position: relative;

    &:hover {
      opacity:0.8;
    }
  }

  &__media__img {
    width: 100%;
    max-height: 270px;
    border-radius: 4px;
    box-shadow: 0px 2px 7px #000;
  }

  &__media__link {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform:translateX(-50%);
    padding:0.6rem 1.5rem;
    font-size:14px;
    outline:none;
    border: none;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    cursor:pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.55);
    }
  }
}

.meal__info,
.meal__ingrendients {
  margin: 10px 0;

  &__title {
    background-color: lightsalmon;
    display: inline-block;
    padding: 3px 5px;
    border-radius: 5px;
    text-transform: uppercase;
  }
}

.meal__info__content {
  margin: 10px 0 0 10px;
  line-height: 1.35;
}

.meal__ingrendients__content {
  margin: 3px 0 0 10px;
}
</style>

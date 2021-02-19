<template>
  <base-modal>
    <div
      class="meal"
      v-for="meal in getMealData"
      :key="meal.mealId"
    >
      <h1 class="meal__title">{{ meal.mealName }}</h1>
      <div class="meal__media">
        <img
          :src="meal.mealImgUrl"
          :alt="meal.mealName"
          class="meal__media__img"
        />
        <a
          :href="meal.mealYoutubeLink"
          class="meal__media__link"
          target="_blank"
        >
          Youtube
        </a>
      </div>
      <div class="meal__info">
        <h2 class="meal__info__title">information</h2>
        <p class="meal__info__content">
          {{ meal.mealInstructions }}
        </p>
      </div>
      <div class="meal__ingrendients">
        <h2 class="meal__ingrendients__title">ingrendients</h2>

        <li
          class="meal__ingrendients__content"
          v-for="ingrendients in meal.mealIngrendients"
          :key="ingrendients"
        >
          {{ ingrendients }}
        </li>
      </div>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, reactive } from 'vue'
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

    const mealData = reactive({
      mealId: '',
      mealName: '',
      mealImgUrl: '',
      mealYoutubeLink: '',
      mealInstructions: '',
      mealIngrendients: [] as string[]
    })

    const getMealInfo = computed(() => {
      return store.getters.getMealInfo
    })

    watch(getMealInfo, newVal => {
      newVal = newVal[0]
      mealData.mealId = newVal.idMeal
      mealData.mealName = newVal.strMeal
      mealData.mealImgUrl = newVal.strMealThumb
      mealData.mealYoutubeLink = newVal.strYoutube
      mealData.mealInstructions = newVal.strInstructions
      for (let i = 1; i <= 20; i++) {
        if (newVal['strIngredient' + i]) {
          mealData.mealIngrendients.push(
            `${newVal['strIngredient' + i]} -> ${newVal['strMeasure' + i]}`
          )
        }
      }
    })

    const getMealData = computed(() => {
      return [mealData]
    })

    return {
      getMealInfo,
      getMealData
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
  border-radius: 4px;
  padding: 10px 30px;
  position: absolute;
  top: 10vh;
  margin-bottom: 10vh;

  &__title {
    padding-bottom: 8px;
    border-bottom: 2px solid #000;
    margin: 12px 0 20px 0;
  }

  &__media {
    position: relative;
    &:hover {
      opacity: 0.8;
    }

    &:hover &__link {
      animation: popup 0.35s ease-in-out;
      opacity: 1;
    }
  }

  &__media__img {
    width: 100%;
    max-height: 270px;
    border-radius: 4px;
    box-shadow: 0px 2px 7px #000;
    object-fit: cover;
  }

  &__media__link {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.6rem 1.5rem;
    font-size: 14px;
    text-decoration: none;
    outline: none;
    border: none;
    border-radius: 34px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    cursor: pointer;
    opacity: 0;

    &:hover {
      background: rgba(0, 0, 0, 1);
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
    margin-top:10px;
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

@keyframes popup {
  0% {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>

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
          :alt="meal.strMeal"
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
          v-for="ing in meal.mealIngrendients"
          :key="ing"
        >
          {{ ing }}
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

    // const mealData = reactive({
    //   mealId: '',
    //   mealName: '',
    //   mealImgUrl: '',
    //   mealYoutubeLink: '',
    //   mealInstructions: '',
    //   mealIngrendients: [] as string[]
    // })

    // const getMealData = computed(() => {
    //   return mealData
    // })

    // if (getMealInfo.value.length === 1) {
    //   const data = getMealInfo.value[0]
    //   console.log('data', data)
    //   mealData.mealId = data.idMeal
    //   mealData.mealName = data.strMeal
    //   mealData.mealImgUrl = data.strMealThumb
    //   mealData.mealYoutubeLink = data.strYoutube
    //   mealData.mealInstructions = data.strInstructions
    //   for (let i = 1; i <= 20; i++) {
    //     if (data['strIngredient' + i]) {
    //       mealData.mealIngrendients.push(`${data['strIngredient' + i]} -> ${data['strMeasure' + i]}`)
    //     }
    //   }
    // }

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
  border-radius: 4px;
  padding: 10px 30px;
  position: absolute;
  top: 10vh;

  &__title {
    padding-bottom: 8px;
    border-bottom: 2px solid #000;
    margin: 12px 0 28px 0;
  }

  &__media {
    position: relative;
    &:hover {
      opacity: 0.8;
    }

    &:hover &__link {
      animation:popup 0.3s ease-in-out;
      opacity:1;
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
    opacity:0;

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
    opacity:0;
    transform:translate(-50%,10px);
  }
  100% {
    opacity:1;
    transform:translate(-50%,0);
  }
}
</style>

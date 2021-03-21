<template>
  <teleport to="body">
    <div class="meal__modal">
      <div class="close" @click="close">
        <Close />
      </div>
      <div
        class="meal__container"
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
        <div class="meal__label">
          <div class="meal__area">
            Area: <span class="meal__label__area">{{ meal.mealArea }}</span>
          </div>
          <div class="meal__category">
            Category:
            <span class="meal__label__category">{{ meal.mealCategory }}</span>
          </div>
        </div>
        <div class="meal__info">
          <h2 class="meal__info__title">Instruction</h2>
          <p
            class="meal__info__content"
            v-html="meal.mealInstructions.replace(/\r?\n/g, '<br />')"
          ></p>
        </div>
        <div class="meal__ingrendients">
          <h2 class="meal__ingrendients__title">ingredients</h2>

          <li
            class="meal__ingrendients__content"
            v-for="ingrendients in meal.mealIngredients"
            :key="ingrendients"
          >
            {{ ingrendients }}
          </li>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, watch, reactive, inject } from 'vue'
import recipeStore from '@/store/recipe'
import Close from '@/components/UI/Close.vue'

export default defineComponent({
  components: {
    Close
  },
  props: {
    mealId: {
      type: String,
      required: true
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const store = inject('store', recipeStore)
    onBeforeMount(() => {
      store.GET_MEALS_BY_ID(props.mealId)
    })

    const mealData = reactive({
      mealId: '',
      mealName: '',
      mealArea: '',
      mealCategory: '',
      mealImgUrl: '',
      mealYoutubeLink: '',
      mealInstructions: '',
      mealIngredients: [] as string[]
    })

    const getMealData = computed(() => {
      return [mealData]
    })

    const getMealInfo = computed(() => {
      return store.getters.getMealInfo
    })

    watch(getMealInfo, newVal => {
      const mealInfo = newVal[0]
      mealData.mealId = mealInfo.idMeal
      mealData.mealName = mealInfo.strMeal
      mealData.mealArea = mealInfo.strArea
      mealData.mealCategory = mealInfo.strCategory
      mealData.mealImgUrl = mealInfo.strMealThumb
      mealData.mealYoutubeLink = mealInfo.strYoutube
      mealData.mealInstructions = mealInfo.strInstructions
      for (let i = 1; i <= 20; i++) {
        if (mealInfo['strIngredient' + i]) {
          mealData.mealIngredients.push(
            `${mealInfo['strIngredient' + i]} -> ${mealInfo['strMeasure' + i]}`
          )
        }
      }
    })

    const close = () => {
      emit('close')
    }

    return {
      getMealInfo,
      getMealData,
      close
    }
  }
})
</script>

<style lang="scss" scoped>
.meal {
  &__modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 50;
    overflow: auto;
  }

  &__container {
    max-width: 500px;
    width: 100%;
    min-height: 100px;
    background: rgba(255, 255, 255, 0.945);
    box-shadow: 0px 2px 5px rgb(255, 255, 255);
    border-radius: 3  px;
    padding: 10px 30px;
    margin: 10vh 0;
  }

  &__title {
    padding-bottom: 8px;
    border-bottom: 2px solid rgb(0, 0, 0);
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

.meal__label {
  display: flex;
  margin-top: 10px;

  .meal__category {
    margin-left: 16px;
  }

  &__area {
    background: #892b64;
    color: #e9a37e;
    padding: 3px 5px;
    border-radius: 5px;

    &:hover {
      background: #7a2859;
    }
  }

  &__category {
    background: #264653;
    color: #eeeeee;
    padding: 3px 5px;
    border-radius: 5px;

    &:hover {
      background: #375a66;
    }
  }
}

.meal__info,
.meal__ingrendients {
  margin: 5px 0 10px;

  &__title {
    background-color: lightsalmon;
    display: inline-block;
    padding: 3px 5px;
    margin-top: 10px;
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

.close {
  position: fixed;
  top: 2%;
  right: 0%;
  cursor: pointer;
  margin-right: 2rem;

  svg {
    fill: azure;
  }
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

<template>
  <div class="collection">
    <div v-if="getCollectionCount !== 0" class="collection__count-heart">
      {{ getCollectionCount }}
    </div>
    <HeartIcon
      @onCollected="onCollected"
      :getCollectionCount="getCollectionCount"
    />
    <div :class="['collection__list', { active: collectionIsOpen }]">
      <div class="collection__heading">
        {{ t('home.header.collection') }}
        <span
          v-if="getCollectionCount !== 0"
          class="collection__count"
        >({{ getCollectionCount }})</span>
      </div>

      <div v-if="getCollection.length === 0" class="collection__empty">
        {{ t('home.header.collection_description') }}
      </div>
      <div class="collection__meal">
        <div
          class="collection__meal-box"
          v-for="meal in getCollection"
          :key="meal.idMeal"
        >
          <img
            class="collection__img"
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            @click="onModalOpen(meal.idMeal)"
          />
          <h4 class="collection__name" @click="onModalOpen(meal.idMeal)">
            {{ meal.strMeal }}
          </h4>
          <MinusIcon
            class="collection__delete"
            @click.stop="removeMeal(meal.idMeal)"
          />
        </div>
      </div>
    </div>
    <MealModal
      v-if="isModalOpen"
      @close="onModalClose"
      :mealId="mealId"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject, computed } from 'vue'
import HeartIcon from '@/components/UI/Icon/Heart.vue'
import MinusIcon from '@/components/UI/Icon/Minus.vue'
import RecipeStore from '@/store'

import MealModal from '@/components/recipe/MealModal.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    HeartIcon,
    MinusIcon,
    MealModal
  },
  setup () {
    const { t } = useI18n()
    const store = inject('store', RecipeStore)

    /** Collection */
    const getCollection = computed(() => store.getters.getCollection)
    const getCollectionCount = computed(() => getCollection.value.length)
    const collectionIsOpen = ref(false)

    function onCollected (toggle: boolean) {
      collectionIsOpen.value = toggle
    }

    function removeMeal (mealId: string) {
      store.REMOVE_RECIPE_FROM_COLLECTION(mealId)
    }

    /** Modal controal */
    const modalStatus = ref(false)
    const mealId = ref('')

    function onModalOpen (id: string) {
      modalStatus.value = true
      mealId.value = id
      document.body.style.overflow = 'hidden'
    }

    function onModalClose () {
      modalStatus.value = !modalStatus.value
      document.body.style.overflow = 'auto'
    }
    const isModalOpen = computed(() => {
      return modalStatus.value
    })

    return {
      t,
      onCollected,
      collectionIsOpen,
      getCollection,
      getCollectionCount,
      onModalOpen,
      onModalClose,
      isModalOpen,
      mealId,
      removeMeal
    }
  }
})
</script>

<style lang="scss" scoped>
.collection {
  padding: 2px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    color: $color-gray-light-1;
    width: 5px;
    height: 16px;
    border-left: 1px solid $color-gray-light-2;
    position: absolute;
    top: 50%;
    left: -8px;
    margin-top: -11px;
  }

  &__count-heart {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 6px;
    width: 1rem;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: $color-primary;
    color: #fff;
  }

  &__list {
    display: none;
  }

  &__list.active {
    display: initial;
    position: absolute;
    bottom: -240px;
    right: 0;
    width: 100%;
    min-width: 320px;
    height: 240px;
    background: #fff;
    z-index: 6;

    padding: 0.6rem 1rem;

    cursor: initial;
    box-shadow: 0px 0px 20px rgba($color-black, 0.2);
    overflow-y: auto;

    &::before {
      content: '';
      background: $color-white;
      width: 8px;
      height: 8px;
      position: absolute;
      z-index: 6;
      top: -3.5px;
      right: 10px;
      transform: rotate(45deg);
      border-radius: 1px;
    }
  }

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    user-select: none;
  }

  &__heading {
    user-select: none;
    margin-bottom: 0.5rem;
    background: $color-primary;
    text-align: center;
  }

  &__meal-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-bottom: 5px;
    cursor: pointer;
  }

  &__name {
    margin: 0 0.6rem;
    line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  &__delete {
    min-width: 18px;
    height: 18px;
    fill: red;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="sidebar">
    <div :class="['sidebar__wrapper', { stretch: isStretch }]">
      <div
        class="sidebar__box"
        v-for="cat in getCategories"
        :key="cat.idCategory"
        @click="onCategoryMeals(cat.strCategory)"
      >
        <div class="sidebar__img-first">
          <img
            :src="
              require(`../../../assets/icon/category/${cat.strCategory}.svg`)
            "
            :alt="cat.strCategory"
          />
        </div>
        <div class="sidebar__text">{{ t(`category.${cat.strCategory.toLowerCase()}`) }}</div>
        <div class="sidebar__img-last">
          <img :src="cat.strCategoryThumb" :alt="cat.strCategory" />
        </div>
      </div>
    </div>
    <div
      :class="['sidebar__scrollDown', { stretch: isStretch }]"
      @click="onStretch"
    >
      <Arrow class="sidebar__scrollDown--icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import RecipeStore from '@/store/index'
import Arrow from '@/components/UI/Icon/Arrow.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    Arrow
  },
  setup () {
    const { t } = useI18n()

    const store = inject('store', RecipeStore)
    const router = useRouter()

    const isStretch = ref(false)

    const getCategories = computed(() => {
      return store.getters.getCategory
    })

    function onStretch () {
      console.log('stretch')
      isStretch.value = !isStretch.value
    }

    function onCategoryMeals (category: string) {
      router.push({
        name: 'searchResult',
        query: { ca: category.toLowerCase() }
      })

      store.GET_MEALS_BY_CATEGORY(category)
    }

    onMounted(() => {
      isStretch.value = false
    })

    return {
      getCategories,
      onCategoryMeals,
      isStretch,
      onStretch,
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 350px;
  width: 38%;

  &__box {
    width: 100%;
    height: 85px;
    background: #eee;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 0 10px 0;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease all;

    &:hover {
      box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.23);
    }
  }

  &__text {
    font-size: 20px;
    padding: 0 10px 0 0;
    text-transform: uppercase;
    color: #333333;
    white-space: nowrap;
  }

  &__box:hover .text {
    color: #fdb926;
  }

  &__img-first {
    margin: 0 30px 0 12px;
    img {
      width: 42px;
      margin-left: 10px;
    }
  }

  &__img-last {
    position: absolute;
    right: 0;
    img {
      position: relative;
      right: -35px;
      width: 130px;
    }
  }

  &__scrollDown {
    display: none;
  }
}

@media (max-width: 1320px) {
  .sidebar {
    width: 30%;

    &__img-last img {
      width: 100px;
      right: -20px;
    }
  }
}

@media (max-width: 1280px) {
  .sidebar {
    width: 26%;

    &__img-last img {
      display: none;
    }
  }
}

@media (max-width: 940px) {
  .sidebar {
    width: 170px;

    &__box {
      height: 70px;
    }

    &__img-first {
      margin: 0 10px 0 0;

      img {
        width: 30px;
      }
    }

    &__text {
      font-size: 16px;
    }
  }
}

@media (max-width: 650px) {
  .sidebar {
    max-width: 650px;
    width: 100%;
    margin: 0 auto 4rem 0;
    position: relative;

    &__wrapper {
      width: 100%;
      overflow: hidden;
      max-height: 280px;
      transition: all 0.5s ease-in;
    }

    &__wrapper.stretch {
      overflow: visible;
      max-height: 1200px;
    }

    &__img-last img {
      display: block;
    }

    &__text {
      padding-left: 20px;
    }

    &__scrollDown {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $color-primary;
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      place-items: center;
      cursor: pointer;
      animation: stretch 0.5s ease;
      animation-iteration-count: 1;

      &:hover {
        background-color: $color-secondary;
      }

      &--icon {
        fill: $color-white;
        transform: rotate(90deg);
        margin-top: 4px;
      }

      &.stretch &--icon {
        transform: rotate(-90deg);
      }
    }
  }
}

@keyframes stretch {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

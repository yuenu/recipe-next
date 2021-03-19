<template>
  <div class="sidebar">
    <div
      class="sidebar__box"
      v-for="cat in getCategories"
      :key="cat.idCategory"
      @click="getCategoryMeals(cat.strCategory)"
    >
      <div class="img1">
        <img
          :src="require(`../../../assets/icon/category/${cat.strCategory}.svg`)"
          :alt="cat.strCategory"
        />
      </div>
      <div class="sidebar__text">{{ cat.strCategory }}</div>
      <div class="img2">
        <img :src="cat.strCategoryThumb" :alt="cat.strCategory" />
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
    const getCategories = computed(() => {
      return store.getters.getCategory
    })
    const getCategoryMeals = (category: string) => {
      store.dispatch('GET_MEALS_BY_CATEGORY', category)
    }

    return {
      getCategories,
      getCategoryMeals
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
    margin:0 0 10px 0;
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
  }

  &__box:hover .text {
    color: #fdb926;
  }

  .img1 {
    margin: 0 30px 0 12px;
    img {
      width: 42px;
      margin-left: 10px;
    }
  }

  .img2 {
    position: absolute;
    right: 0;
    img {
      position: relative;
      right: -35px;
      width: 130px;
    }
  }
}

@media (max-width: 1320px) {
  .sidebar {
    width: 30%;

    &__box .img2 img {
      width: 100px;
      right: -20px;
    }
  }
}

@media (max-width: 1280px) {
  .sidebar {
    width: 26%;

    &__box .img2 img {
      display: none;
    }
  }
}

@media (max-width: 940px) {
  .sidebar {
    width: 170px;

    &__box {
      height: 70px;

      .img1 {
        margin: 0 10px 0 0;
      }

      .img1 img {
        width: 30px;
      }

      &__text {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 650px) {
  .sidebar {
    display: none;
  }
}

@media (max-width: 476px) {
  .sidebar {
    display: none;
  }
}
</style>

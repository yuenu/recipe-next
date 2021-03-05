<template>
  <div class="result">
    <div class="result__title">
      <div class="banner">Salad</div>
    </div>
    <div class="container">
      <div class="sidebar">
        <div
          class="sidebar__box"
          v-for="cat in categories"
          :key="cat.idCategory"
          @click="getCatgoryMeals(cat.strCategory)"
        >
          <div class="img1">
            <img
              :src="require(`../assets/icon/category/${cat.strCategory}.svg`)"
              :alt="cat.strCategory"
            />
          </div>
          <div class="text">{{ cat.strCategory }}</div>
          <div class="img2">
            <img :src="cat.strCategoryThumb" :alt="cat.strCategory" />
          </div>
        </div>
      </div>
      <div class="cards__container">
        <MealLists />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import MealLists from '@/components/recipe/MealLists.vue'

type Category = {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}

export default defineComponent({
  name: 'SearchResult',
  components: {
    MealLists
  },
  setup () {
    const store = useStore()
    const categories = computed(() => {
      return store.getters.getCategory
    })

    const getCatgoryMeals = (category: string) => {
      store.dispatch('GET_MEALS_BY_CATEGORY', category)
    }

    onBeforeMount(() => store.dispatch('GET_CATEGORY'))

    return {
      categories,
      getCatgoryMeals
    }
  }
})
</script>

<style lang="scss" scoped>
.result {
  max-width: 1330px;
  margin: 2rem auto;
  width: 100%;
}

.container {
  margin-top: 4rem;
  min-height: 20vh;
  display: flex;
  width: 100%;
}

.banner {
  width: 100%;
  height: 130px;
  background: url('../assets/banner.png') no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-transform: uppercase;
}

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
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease all;

    &:hover {
      box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.23);
    }
  }

  .text {
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

.cards__container {
  width: 100%;
  margin: 0 0 0 16px;
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

      .text {
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

  .cards__container {
    width: 100%;
    margin: 0 3px;
  }
}
</style>

<template>
  <div class="sidebar">
    <div class="sidebar__box">
      <div
        class="category__box"
        v-for="cat in categories"
        :key="cat.idCategory"
        @click="getCatgoryMeals(cat.strCategory)"
      >
        <img
          class="category__img"
          :src="cat.strCategoryThumb"
          :alt="cat.strCategory"
        />
        <div class="category__text">{{ cat.strCategory }}</div>
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
    const categories = computed(() => {
      return store.getters.getCategory
    })

    const getCatgoryMeals = (category: string) => {
      store.dispatch('GET_MEALS_BY_CATEGORY', category)
    }

    return {
      categories,
      getCatgoryMeals
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 300px;
  display: flex;
  justify-content: center;

  &__box {
    width: 250px;
    height: fit-content;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.547)
    );
    box-shadow: 1px 5px 5px rgb(117, 117, 117);
    border-radius: 16px;
    margin: 10vh 0;
  }
}

.category {
  &__box {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    cursor: pointer;
  }

  &__box:first-of-type {
    border-radius: 16px 16px 0 0;
  }

  &__box:last-of-type {
    border-radius: 0 0 16px 16px;
  }

  &__box:not(:last-of-type) {
    border-bottom: 1px solid rebeccapurple;
  }

  &__box:hover {
    background: rgba(220, 220, 220, 1);
  }

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #eee;
    box-shadow: 0px 0px 3px #000;
  }

  &__text {
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 1.4px;
  }
}

@media (max-width: 930px) {
  .sidebar {
    display: none;
  }
}
</style>

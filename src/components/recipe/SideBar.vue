<template>
  <div class="sidebar">
    <div class="sidebar__box">
      <div
        class="category__box"
        v-for="cat in category"
        :key="cat.id"
      >
        <img :src="cat.path" class="category__img" />
        <div class="category__text">{{ cat.name.toUpperCase() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    category () {
      return [
        {
          id: 1,
          name: 'bread',
          path: require('@/assets/category/bread.jpg')
        },
        {
          id: 2,
          name: 'chicken',
          path: require('@/assets/category/chicken.jpg')
        },
        {
          id: 3,
          name: 'dessert',
          path: require('@/assets/category/dessert.jpg')
        },
        {
          id: 5,
          name: 'pasta',
          path: require('@/assets/category/pasta.jpg')
        },
        {
          id: 6,
          name: 'bread',
          path: require('@/assets/category/bread.jpg')
        },
        {
          id: 7,
          name: 'salad',
          path: require('@/assets/category/salad.jpg')
        },
        {
          id: 8,
          name: 'seafood',
          path: require('@/assets/category/seafood.png')
        },
        {
          id: 9,
          name: 'vegetarian',
          path: require('@/assets/category/vegetarian.png')
        }
      ]
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
    margin-top: 10vh;
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
    border:1px solid #eee;
    box-shadow:0px 0px 3px #000;
  }

  &__text {
    margin-left: 20px;
    font-size: 0.9rem;
    font-weight:700;
    letter-spacing: 1.4px;
  }
}

@media (max-width: 1080px) {
  .sidebar {
    display: none;
  }
}
</style>

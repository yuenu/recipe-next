<template>
  <div class="sec4">
    <div class="wrapper">
      <div
        class="card"
        v-for="item in data"
        :key="item.id"
      >
        <div class="card__body">
          <img
            class="card__img"
            :src="item.img"
            alt="img"
          />
          <h2 class="card__title">{{ item.title }}</h2>
          <p class="card__description">
            {{ item.description }}
          </p>
        </div>
        <button className="card__btn">View Recipe</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const data = [
      {
        id: 1,
        img: require('@/assets/example/img1.jpg'),
        title: 'The Everyday Salad',
        description:
          'Fear Risotto no more! This simple recipe is perfect for family dinners.'
      },
      {
        id: 2,
        img: require('@/assets/example/img2.jpg'),
        title: 'Baked Cod with Vegetables',
        description: 'Baked Cod with Vegetables. 30 minute meal!'
      },
      {
        id: 3,
        img: require('@/assets/example/img3.jpg'),
        title: 'Simple Risotto',
        description:
          'Fear Risotto no more! This simple recipe is perfect for family dinners.'
      }
    ]
    return { data }
  }
})
</script>

<style lang="scss" scoped>
.sec4 {
  width:100%;
  min-height:40rem;

}

.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 25rem));
  gap: 3.6rem;
  margin: 5rem 0 0 0;
  justify-content: center;
}

.card {
  overflow: hidden;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition:all 0.3s ease-in;
  color:#333;
  background:#fff;
  border: 2px solid rgba(220,220,220,0.4);

  &__img {
    height: 18rem;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    padding: 1rem;
  }

  &__description {
    padding: 0 1rem;
  }

  &__btn {
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid #d50000;
    background: transparent;
    color: #d50000;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 2px 5px 20px #83858a;
    border: 2px solid rgba(220,220,220,0.1);
  }

  &:hover &__btn {
    background: #d50000;
    color: #fff;
  }
}
</style>

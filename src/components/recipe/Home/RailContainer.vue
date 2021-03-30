<template>
  <div class="railContainer">
    <div class="railContainerWrapper">
      <div
        class="detailBox"
        v-for="item in data"
        :key="item.id"
      >
        <div class="detailBox__body">
          <img
            class="detailBox__photo"
            :src="item.img"
            alt="img"
          />
          <h2 class="detailBox__heading">{{ item.title }}</h2>
          <p class="detailBox__description">
            {{ item.description }}
          </p>
        </div>
        <button className="detailBox__btn">View Recipe</button>
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
      },
      {
        id: 4,
        img: require('@/assets/example/img4.jpg'),
        title: 'Sweet and Spicy Main Dish Recipes',
        description:
          'One of the best flavor combinations going is the seemingly odd-couple marriage of sweet and spicy.  '
      }
    ]
    return { data }
  }
})
</script>

<style lang="scss" scoped>
.railContainer {
  width:100%;
  min-height:40rem;
}

.railContainerWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 19.2rem));
  gap: 2rem;
  margin: 5rem 0 0 0;
  justify-content: center;
}

.detailBox {
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

  &__photo {
    height: 18rem;
    width: 100%;
    object-fit: cover;
  }

  &__heading {
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

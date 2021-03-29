<template>
  <div class="section-about">
    <div class="sec2__container">
      <div class="content">
        <div class="title">Pizza Express Margherita</div>
        <div class="card__rate">
          <Star class="star" />
          <Star class="star" />
          <Star class="star" />
          <Star class="star" />
          <Star class="star" />
        </div>
        <div class="text">
          Pizza, dish of Italian origin consisting of a flattened disk of bread
          dough topped with some combination of olive oil, oregano, tomato,
          olives, mozzarella or other cheese, and many other ingredients, baked
          quickly—usually, in a commercial setting, using a wood-fired oven
          heated to a very high temperature—and served hot.
        </div>
        <button class="tryLink">
          <span class="tryLink__text">Try Now</span>
        </button>

        <div class="descriptionIcon">
          <div
            class="descriptionIcon__box"
            v-for="item in descriptionIcon"
            :key="item.id"
          >
            <img
              :src="item.src"
              :alt="item.text"
              class="descriptionIcon__img"
            />
            <div class="descriptionIcon__text">{{ item.text }}</div>
          </div>
        </div>
      </div>

      <div class="pic">
        <img src="@/assets/example/bg3.png" alt="bg3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Star from '@/components/UI/Icon/Star.vue'

export default defineComponent({
  components: {
    Star
  },
  setup () {
    const descriptionIcon = [
      {
        id: 1,
        text: 'Fast',
        src: require('@/assets/icon/cook.svg')
      },
      {
        id: 2,
        text: 'Health',
        src: require('@/assets/icon/cook-self.svg')
      },
      {
        id: 2,
        text: 'Idea',
        src: require('@/assets/icon/idea.svg')
      }
    ]
    return { descriptionIcon }
  }
})
</script>

<style lang="scss" scoped>
$star-color: #fdb926;

img {
  width: 100%;
  height: 100%;
}

.section-about {
  max-width: 1330px;
  margin: 5rem 0 3rem 0;
}

.sec2__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 90px;
  justify-items: center;
  align-items: center;
}

.title {
  font-size: 48px;
  font-weight: 400;
}

.star {
  fill: $star-color;
  width: 12px;
  margin: 0 2px;
}

.tryLink {
  text-decoration: none;
  background: transparent;
  border: 2px solid #c84f48;
  border-radius: 0.1rem;
  color: #333;
  width: 6.8rem;
  height: 3.3rem;
  margin: 36px 0 0;
  font-size: 18px;
  font-weight: 300;
  font-family: inherit;
  position: relative;
  float: left;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #c84f48;
    color: #fff;
  }
}

.descriptionIcon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  margin: 4.5rem 10rem 0 0;
  padding: 0 10rem 0 0;

  &__text {
    text-align: center;
  }

  &__img {
    width: 45px;
    height: auto;
    margin: 5px auto;
    display: block;
  }

  &__box:nth-child(3) &__img {
    width: 50px;
  }
}

@media (max-width: 1330px) {
  .content {
    padding: 0 0 0 20px;
  }
}

@media (max-width: 920px) {
  .content {
    padding: 0 5rem;
  }

  .sec2__container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 476px) {
  .content {
    padding: 0 1rem;
  }
}
</style>

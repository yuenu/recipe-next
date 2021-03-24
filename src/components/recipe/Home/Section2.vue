<template>
  <div class="sec2">
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
      </div>
      <div class="pic">
        <img src="@/assets/example/bg3.png" alt="bg3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Star from '@/components/UI/Star.vue'

export default defineComponent({
  components: {
    Star
  }
})
</script>

<style lang="scss" scoped>
$star-color:#fdb926;

img {
  width: 100%;
  height: 100%;
}

.sec2 {
  max-width: 1330px;
  margin: 5rem 0 3rem 0;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    justify-items: center;
    align-items: center;
  }
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
  background: transparent;
  border: 2px solid #ffce2d;
  border-radius: 0.1rem;
  width: 6.8rem;
  height: 3.3rem;
  margin: 36px 0 0;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0,1.13,.83,.67);
  font-family: inherit;
  overflow:hidden;

  &::after {
    content: '';
    width: 6.8rem;
    height: 3.3rem;
    background: rgb(255, 206, 45);
    border-color:rgb(255, 206, 45);
    outline:none;
    position:absolute;
    left:0;
    top:0;
    transform: translateX(-100%);
    transition:0.2s all ease-out;
  }

  &:hover::after {
    transform: translateX(0);
  }

  &__text {
    z-index:20;
    color: #333;
    font-size: 18px;
    font-weight: 300;
  }
}

@media (max-width:1330px) {
  .content {
    padding:0 0 0 20px;
  }
}

@media (max-width:920px) {
  .content {
    padding:0 5rem;
  }

  .sec2__container {
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr;
  }
}

@media (max-width:476px) {
    .content {
    padding:0 1rem;
  }
}
</style>

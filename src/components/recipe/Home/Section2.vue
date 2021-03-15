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
          Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.
        </div>
        <button class="tryLink">Try Now !!</button>
      </div>
      <div class="pic">
        <img src="@/assets/example/bg3.png" alt="bg3">
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
img {
  width:100%;
  height:100%;
}

.sec2 {
  max-width:1330px;
  margin:5rem 0 3rem 0;

  &__container {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:90px;
    justify-items: center;
    align-items: center;
  }
}

.title {
  font-size:48px;
  font-weight:400;

}

.star {
  fill: #fdb926;
  width: 12px;
  margin: 0 2px;
}

.tryLink {
  text-decoration: none;
  background: rgb(255, 206, 45);
  color: #333;
  padding: 13px 24px;
  margin: 36px 0 0;
  font-size: 18px;
  font-weight:300;
  position: relative;
  float: left;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgb(255, 214, 77);
  }
}

</style>

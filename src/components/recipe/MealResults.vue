<template>
  <div class="cards">
    <div class="card">
      <div
        class="card__box"
        v-for="image in images"
        :key="image.id"
      >
        <img
          :src="image.path"
          :alt="image.description"
          class="card__img"
        >
        <div class="card__content">
          <div class="card__title">Juice Pink</div>
          <div class="card__text">lerom this is sdafjasopfjaskfcmzkxlcm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    images () {
      return [
        {
          id: 1,
          path: require('@/assets/example/img1.jpg'),
          description: 'img1'
        },
        {
          id: 2,
          path: require('@/assets/example/img2.jpg'),
          description: 'img2'
        },
        {
          id: 3,
          path: require('@/assets/example/img3.jpg'),
          description: 'img3'
        },
        {
          id: 4,
          path: require('@/assets/example/img4.jpg'),
          description: 'img4'
        },
        {
          id: 5,
          path: require('@/assets/example/img5.jpg'),
          description: 'img5'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  max-width: 600px;
  padding: 20px 10px;
  margin: 0 auto;
  height:fit-content;
  columns: 2 auto;
  column-gap: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.151), rgba(255,255,255,0.42));
  backdrop-filter: blur(10px);
  box-shadow: 0px 2px 5px #000;;
  border-radius:10px;
  margin-top: calc(10vh + 370px);
  margin-bottom:2rem;

  &__box {
    break-inside: avoid;
    color: #ffffff;
    border-radius: 12px;
    max-width: 250px;
    width:100%;
    margin:0 auto;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    background:#eee;
    margin:10px;
    text-align: center;
    padding:0 20px;
  }

  &__box:first-of-type {
    margin-top:0;
  }

  &__img {
    width: 80px;
    height: 80px;
    border-radius:50%;
    object-fit: cover;
    margin:12px 0;
  }

  &__content {
    color:rgb(20,20,20);
  }

  &__title {
    font-size:1.2rem;
    display:inline-block;
    border-bottom: 1px solid #000;
    margin-bottom:20px;
  }
}
</style>

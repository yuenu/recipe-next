<template>
  <div class="carousel">
    <div class="carousel__section">
      <img
        v-for="img in getShowImg"
        :key="img.id"
        :src="img.src"
        :alt="img.name"
        class="carousel__img"
      />
      <Arrow class="arrow-left" @click="onPrev" />
      <Arrow class="arrow-right" @click="onNext" />
    </div>

    <br />

    <div class="dots u-text-align-center">
      <span
        v-for="dotCount in imagesLen"
        :class="['dot', { active: getShowImg[0].id === dotCount }]"
        :key="dotCount"
        @click="currentSlide(dotCount)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'

export default defineComponent({
  setup () {
    const sliderIndex = ref(1)

    // Fake data
    const images = [
      {
        id: 1,
        src: require('@/assets/example/img1.jpg'),
        name: 'img1'
      },
      {
        id: 2,
        src: require('@/assets/example/img2.jpg'),
        name: 'img2'
      },
      {
        id: 3,
        src: require('@/assets/example/img3.jpg'),
        name: 'img3'
      },
      {
        id: 4,
        src: require('@/assets/example/img4.jpg'),
        name: 'img4'
      },
      {
        id: 5,
        src: require('@/assets/example/img5.jpg'),
        name: 'img5'
      }
    ]
    const imagesLen = images.length

    /**
     * set Interval Timer
     *
     * @param {Number} timer - store interval time
     */
    let timer: number
    const resetInterval = (timer: number) => {
      clearInterval(timer)

      timer = setInterval(() => {
        sliderIndex.value++
        if (sliderIndex.value > 5) sliderIndex.value = 1
      }, 2500)
      return timer
    }

    /**
     * Backward to previous the image
     */
    const onPrev = () => {
      timer = resetInterval(timer)
      sliderIndex.value--
      if (sliderIndex.value < 1) sliderIndex.value = imagesLen
    }

    /**
     * Forward to next the image
     */
    const onNext = () => {
      timer = resetInterval(timer)
      sliderIndex.value++
      if (sliderIndex.value >= imagesLen + 1) sliderIndex.value = 1
    }

    // get show up to silde image by index
    const getShowImg = computed(() =>
      images.filter(img => img.id === sliderIndex.value)
    )

    /**
     * Swtich the index by clicked dot
     *
     * @param {string} index - clciked index
     */
    const currentSlide = (index: number) => {
      timer = resetInterval(timer)
      sliderIndex.value = index
    }

    onMounted(() => {
      timer = resetInterval(timer)
    })

    return {
      sliderIndex,
      images,
      imagesLen,
      onPrev,
      onNext,
      getShowImg,
      currentSlide
    }
  }
})
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 270px;
  margin: 10vh auto 7vh;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.6)
  );
  border-radius: 15px;
  box-shadow: 1px 3px 10px rgb(131, 131, 131);

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease;
    user-select: none;
  }

  &__img:hover {
    opacity: 0.8;
  }
}

.carousel__section {
  position: relative;
  height: 100%;
  width: 100%;
}

.arrow-left,
.arrow-right {
  position: absolute;
  top: 50%;
  cursor: pointer;
}

.arrow-left {
  left: 1%;
  transform: translateY(-50%) rotate(180deg);
}

.arrow-right {
  right: 1%;
  transform: translateY(-50%);
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 7px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.dot.active,
.dot:hover {
  background-color: #20ad96;
  transform: scale(1.2);
}

@media (max-width:940px) {
  .carousel {
    max-width:600px;
  }
}
</style>

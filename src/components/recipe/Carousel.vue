<template>
  <div class="banner">
    <div class="banner__section">
      <img
        v-for="img in getShowImg"
        :key="img.id"
        :src="img.src"
        :alt="img.name"
        class="banner__img"
      />
      <Arrow class="arrow-left" @click="prev" />
      <Arrow class="arrow-right" @click="next" />
    </div>

    <br />

    <div class="dots">
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
import Arrow from '@/components/UI/Arrow.vue'

export default defineComponent({
  components: {
    Arrow
  },
  setup () {
    // Variables
    const sliderIndex = ref(1)
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

    // setInterval timer
    const slideThrough = () => {
      sliderIndex.value++
      if (sliderIndex.value > 5) sliderIndex.value = 1
    }

    let timer = setInterval(() => {
      slideThrough()
    }, 2500)

    const resetInterval = (timer: number) => {
      clearInterval(timer)

      timer = setInterval(() => {
        sliderIndex.value++
        if (sliderIndex.value > 5) sliderIndex.value = 1
      }, 2500)
      return timer
    }

    // Methods
    const prev = () => {
      timer = resetInterval(timer)
      sliderIndex.value--
      if (sliderIndex.value < 1) sliderIndex.value = imagesLen
    }

    const next = () => {
      timer = resetInterval(timer)
      sliderIndex.value++
      if (sliderIndex.value >= imagesLen + 1) sliderIndex.value = 1
    }

    const getShowImg = computed(() =>
      images.filter(img => img.id === sliderIndex.value)
    )

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
      prev,
      next,
      getShowImg,
      currentSlide
    }
  }
})
</script>

<style lang="scss" scoped>
.banner {
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  max-width: 600px;
  width: 100%;
  height: 270px;
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

.banner__section {
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
  transform: translateY(-100%) rotate(180deg);
}

.arrow-right {
  right: 1%;
  transform: translateY(-100%);
}

.dots {
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 6px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.dot.active,
.dot:hover {
  background-color: #717171;
}
</style>

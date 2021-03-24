<template>
  <div
    ref="scrollBtn"
    class="scrollToTop"
    @click="scrollToTop(300)"
  >
    <span />
    <span />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup () {
    const scrollBtn = ref<HTMLElement>()

    const scrollToTop = (duration: number) => {
      const scrollElement = document.scrollingElement as HTMLElement
      // cancel if already on top
      if (scrollElement.scrollTop === 0 && document.scrollingElement === null) {
        return
      }

      const totalScrollDistance = scrollElement.scrollTop
      let scrollY = totalScrollDistance
      let oldTimestamp: number | null = null

      function step (newTimestamp: number | null) {
        if (oldTimestamp !== null && newTimestamp !== null) {
          // if duration is 0 scrollY will be -Infinity
          scrollY -=
            (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration
          if (scrollY <= 0) return (scrollElement.scrollTop = 0)
          scrollElement.scrollTop = scrollY
        }
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }

    const scrollButtonShow = () => {
      if (scrollBtn.value) {
        if (
          document.body.scrollTop > 800 ||
          document.documentElement.scrollTop > 800
        ) {
          scrollBtn.value.style.display = 'flex'
        } else {
          scrollBtn.value.style.display = 'none'
        }
      }
    }

    onMounted(() => {
      window.onscroll = () => {
        scrollButtonShow()
      }
    })

    return {
      scrollToTop,
      scrollBtn
    }
  }
})
</script>

<style lang="scss" scoped>
$text-color:#333;

$color-primary: #ffce2d;

.scrollToTop {
  z-index:10;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 2%;
  bottom: 2%;
  border-radius: 50%;
  border: 2px solid $text-color;
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  & span {
    width: 15px;
    height: 2px;
    background: $text-color;
    border-radius: 2px;
    display: inline-block;
    transition: 0.3s transform ease;
  }

  & span:first-child {
    transform: translateX(3px) rotate(-50deg);
  }

  & span:last-child {
    transform: translateX(-3px) rotate(50deg);
  }

  &:hover span:first-child {
    transform: translate(3px, -2px) rotate(-50deg);
  }

  &:hover span:last-child {
    transform: translate(-3px, -2px) rotate(50deg);
  }
}

@media (max-width: 800px) {
  .scrollToTop {
    background: $color-primary;
  }
}
</style>

<template>
  <div class="skeleton" :style="style"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '10' },
    margin: { type: [String, Number], default: '0' },
    mode: { type: String, default: 'light' }
  },
  setup (prop) {
    function isNUmeric (val) {
      return /^\d+$/.test(val)
    }

    const _width = computed(() =>
      isNUmeric(prop.width) ? prop.width + 'px' : prop.width
    )

    const _height = computed(() =>
      isNUmeric(prop.height) ? prop.height + 'px' : prop.height
    )

    const _margin = computed(() =>
      isNUmeric(prop.margin) ? prop.margin + 'px' : prop.margin
    )

    const _background = computed(() =>
      prop.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : '#dddbdd'
    )

    const style = computed(() => {
      return {
        width: _width.value,
        height: _height.value,
        margin: _margin.value,
        background: _background.value
      }
    })

    return { style }
  }
})
</script>

<style lang="scss" scoped>
.skeleton {
  position:relative;
  min-height:0px;
  overflow:hidden;

  &::after {
    content:'';
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.8),
      transparent
    );
    animation: wave 1s linear infinite;
  }
}

@keyframes wave {
  0% {
    opacity:0;
    transform:translateX(-100%);
  }

  85%{
    opacity:1;
    transform:translateX(90%);
  }

  100%{
    opacity:1;
    transform:translateX(100%);
  }
}
</style>

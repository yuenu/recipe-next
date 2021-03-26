<template>
  <div :class="['modal']" v-if="isOpen">
    <slot></slot>
    <div class="close" @click="close">
      <Close />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Close from './Icon/Close.vue'

export default defineComponent({
  components: {
    Close
  },
  props: {
    isMobileOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const close = () => {
      emit('close')
    }

    const isOpen = computed(() => {
      return props.isMobileOpen
    })

    return { close, isOpen }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  overflow: auto;
}

.modal.hide {
  display: none;
}

.close {
  position: fixed;
  top: 15px;
  right: 3%;
  cursor: pointer;

  svg {
    fill: azure;
  }
}
</style>

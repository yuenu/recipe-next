<template>
  <div class="modal">
    <slot></slot>

    <div class="close" @click="close">
      <Close />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Close from './Close.vue'

export default defineComponent({
  components: {
    Close
  },
  emits: ['close'],
  setup (_, { emit }) {
    const close = () => {
      emit('close')
    }

    return { close }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 50;
  overflow: auto;
}

.close {
  position: absolute;
  top: 2%;
  right: 2.5%;
  cursor: pointer;

  svg {
    fill: azure;
  }
}
</style>

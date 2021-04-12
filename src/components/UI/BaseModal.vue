<template>
  <div class="modal" v-if="isOpen">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    onModalOpen: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const isOpen = computed(() => {
      return props.onModalOpen
    })

    return { isOpen }
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
  background: rgba(0, 0, 0, 0.65);
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
  z-index:52;
  cursor: pointer;
  background: transparent;

  svg {
    fill: azure;
  }
}
</style>

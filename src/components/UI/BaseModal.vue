<template>
  <div :class="['modal']" v-if="isOpen">
    <slot></slot>
    <div class="close" @click="close">
      <Close />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import Close from './Close.vue'

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

    onMounted(() => {
      console.log(props)
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
  top: 2%;
  right: 0%;
  cursor: pointer;
  margin-right: 2rem;

  svg {
    fill: azure;
  }
}
</style>

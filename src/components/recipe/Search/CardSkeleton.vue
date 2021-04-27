<template>
  <Skeleton class="cardSkeleton" :manual="true" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skeleton from '@/components/UI/Skeleton.vue'

export default defineComponent({
  components: {
    Skeleton
  }
})
</script>

<style lang="scss" scoped>
.cardSkeleton {
  padding-top: 100%;
  width: 100%;
}
</style>

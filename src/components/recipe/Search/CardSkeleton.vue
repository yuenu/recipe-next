<template>
  <Skeleton width="100%" height="278"/>
</template>

<script>
import Skeleton from '@/components/UI/Skeleton.vue'

export default {
  components: {
    Skeleton
  }
}
</script>

<style>
.card-skeleton {
  width: 300px;
  height: 370px;
  border: 1px solid #ccc;
  margin: 0 0 10px 0;
  padding: 10px;
}
</style>

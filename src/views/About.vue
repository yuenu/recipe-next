<template>
  <div class="about-section">
    <Skeleton width="60" height="60" />
    <Skeleton height="20" />
    <Skeleton width="80%" />
    <Skeleton width="80%" />
    <Skeleton width="80%" />

    <div style="background: #333; height:250px; margin: 20px 0; padding: 20px;">
      <Skeleton
        width="60"
        height="60"
        mode="dark"
      />
      <Skeleton height="20" mode="dark" />
      <Skeleton width="80%" mode="dark" />
      <Skeleton width="80%" mode="dark" />
      <Skeleton width="80%" mode="dark" />
    </div>

    <div class="card-skeleton">
      <div class="img" style="width:275px; height:280px;">
        <Skeleton
          width="100%"
          height="278"
          v-loadTest="{ src:imgSrc, alt: 'testImgAlt' }"
        />
      </div>
      <Skeleton
        width="50%"
        height="20"
        margin="20px 0 0 0"
      />
      <Skeleton
        width="40%"
        height="20"
        margin="5px 0"
      />
    </div>

    <div
      class="img-box"
      style="min-height: 700px; height:auto; width:400px; border:1px solid #ccc;"
    >

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Skeleton from '@/components/UI/Skeleton.vue'

const imgSrc = 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80'

export default defineComponent({
  components: {
    Skeleton
  },
  setup () {
    return { imgSrc }
  }
})
</script>

<style lang="scss" scoped>
.card-skeleton {
  width: 300px;
  height: 370px;
  border: 1px solid #ccc;
  margin: 0 0 10px 0;
  padding: 10px;
}
</style>

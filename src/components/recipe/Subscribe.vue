<template>
  <div class="subscribe">
    <div class="bg"></div>
    <div class="content">
      <div class="content__text">
        <div class="content__text__title">Now Subscribe NOW!!!</div>
      </div>
      <input type="text" class="content__input">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  height: 400px;
  position: relative;
  background: rgb(221, 151, 29);
  background: linear-gradient(
    90deg,
    rgba(221, 151, 29, 0.37) 0%,
    rgba(233, 148, 148, 0.37) 100%
  );
  margin: 5rem 0;
  overflow: hidden;
}

.bg {
  background: url('../../assets/bg-n.png');
  background-repeat: no-repeat;
  position: absolute;
  top: 20px;
  left: 200px;
  width: 100%;
  height: 100%;
  opacity: 0.75;
}

.content {

}
</style>

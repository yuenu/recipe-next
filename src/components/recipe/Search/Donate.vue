<template>
  <div class="donate">
    <img
      src="@/assets/example/coffee.png"
      alt="coffee"
      class="donate__img"
    />
    <div class="donate__content">
      <div class="donate__heading">Give us a coffee</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.donate {
  width: calc(100% - 1rem);
  margin-left: 10px;
  background-color: rgba($color-primary, 0.8);
  height: 460px;
  float: right;
  display: flex;

  &__img {
    width:50%;
    object-fit: cover;
  }
}
</style>

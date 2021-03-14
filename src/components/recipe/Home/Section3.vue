<template>
  <div class="sec3">
    <div class="sec3__container">
      <div class="pic1">
        <img src="@/assets/example/bg2-1.png" alt="bg2-1">
      </div>
      <div class="pic2">
        <img src="@/assets/example/bg2-2.png" alt="bg2-2">
      </div>
      <div class="pic3">
        <img src="@/assets/example/bg2-3.png" alt="bg2-3">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width:100%;
  height:100%;
}

.sec3 {
  max-width:1140px;
  margin:26px 0 0;

  &__container {
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap:20px;
  }
}
</style>

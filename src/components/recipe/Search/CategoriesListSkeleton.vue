<template>
  <div class="sidebar">
    <div
      class="sidebar__box"
      v-for="i in 5"
      :key="i"
    >
      <div class="sidebar__img1">
        <img />
      </div>
      <div class="sidebar__text"></div>
      <div class="sidebar__img2">
        <img />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  max-width: 350px;
  width: 38%;

  &__box {
    width:100%;
    height:85px;
    background:#eee;
    margin:0 0 10px 0;
    display: flex;
    align-items: center;
  }

  &__img1 {
    margin: 0 30px 0 20px;
    width:42px;
    height:42px;
    margin-left:10px;
    background:#a2a2a2;
    border-radius:50%;
    animation:pulse-bg 1s infinite;
  }

  &__text {
    width:100px;
    height:24px;
    background:#a2a2a2;
    animation:pulse-bg 1s infinite;

  }
}

@keyframes pulse-bg {
  0% {
    background:#a2a2a2;
  }

  50% {
    background:#898989;
  }

  100% {
    background:#a2a2a2;
  }
}
</style>

<template>
  <div class="skeleton"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.skeleton {
  position: relative;
  min-height: 30px;
  background: #ddd;
  overflow: hidden;
  margin: 5px;
}

.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(525, 255, 255, 0.5),
    transparent
  );
  animation: wave 1.3s linear 500ms infinite;
}

@keyframes wave {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 1;
    transform: translate(100%);
  }
  100% {
    opacity: 1;
    transform: translate(100%);
  }
}
</style>

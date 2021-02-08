<template>
  <div class="banner">
    <div class="banner__section">
      <img
        src="@/assets/example/img1.jpg"
        alt="img"
        class="banner__img"
      >
      <Arrow class="arrow-left" />
      <Arrow class="arrow-right" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Arrow from '@/components/UI/Arrow.vue'

export default defineComponent({
  components: {
    Arrow
  }
})
</script>

<style lang="scss" scoped>
.banner {
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  max-width: 600px;
  width:100%;
  height: 270px;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.6)
  );
  border-radius:15px;
  box-shadow:1px 3px 10px rgb(131, 131, 131);

  &__img {
    width:100%;
    height:100%;
    object-fit: cover;
    transition:opacity 1s ease;
  }

  &__img:hover {
    opacity:0.8;
  }
}

.banner__section {
  position:relative;
  height:100%;
  width:100%;
}

.arrow-left,
.arrow-right {
  position:absolute;
  top:50%;
}

.arrow-left {
  left:1%;
  transform:translateY(-100%) rotate(180deg);
}

.arrow-right {
  right:1%;
  transform:translateY(-100%);
}
</style>

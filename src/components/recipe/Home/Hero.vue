<template>
  <section class="hero">
    <div class="hero-box">
      <h2 class="hero-box__heading">Make meal by your own</h2>
      <div class="hero-box__text">
        You can discover thousands of meals on here every day!
      </div>
      <CtaButton />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import CtaButton from '@/components/UI/CtaButton.vue'

export default defineComponent({
  components: {
    CtaButton
  }
})
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url('../../../assets/example/bg1.jpg') no-repeat left center / cover;
  width: 100%;
  height: 650px;
  position: relative;

  &-box {
    color: white;
    position: absolute;
    right: 10%;
    top: 20%;
  }

  &-box__heading {
    font-size: 45px;
    margin-bottom: 1.1rem;
  }
}
</style>

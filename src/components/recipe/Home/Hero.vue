<template>
  <section class="hero">
    <div class="hero-box">
      <h2 class="hero-box__heading">{{ t('home.hero.heading') }}</h2>
      <div class="hero-box__text">
        {{ t('home.hero.secondary_heading') }}
      </div>
      <CtaButton />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import CtaButton from '@/components/UI/CtaButton.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    CtaButton
  },
  setup () {
    const { t } = useI18n()
    return { t }
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

@media (max-width: 476px) {
  .hero-box {
    padding: 0 20px;
  }
}
</style>

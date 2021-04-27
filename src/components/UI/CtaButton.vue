<template>
  <button class="ctaButton">{{ t('home.hero.ctaBtn') }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const { t } = useI18n()

    return { t }
  }
})
</script>

<style lang="scss" scoped>
.ctaButton {
  text-decoration: none;
  background: transparent;
  border: 2px solid rgb(255, 206, 45);
  border-radius: 0.1rem;
  color: #fff;
  width: 6.8rem;
  height: 3.3rem;
  margin: 36px 0 0;
  font-size: 18px;
  font-weight: 400;
  font-family: inherit;
  position: relative;
  float: left;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgb(255, 214, 77);
    color: #333;
  }
}
</style>

<template>
  <ul :class="[isMobile ? 'mobile__lang' : 'lang']">
    <li
      :class="[isMobile ? 'mobile__lang-box' : 'lang-box']"
      @click="changeLang('cn')"
    >
      简
    </li>
    <br />
    <li
      :class="[isMobile ? 'mobile__lang-box' : 'lang-box']"
      @click="changeLang('tw')"
    >
      繁
    </li>
    <br />
    <li
      :class="[isMobile ? 'mobile__lang-box' : 'lang-box']"
      @click="changeLang('en')"
    >
      EN
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    mode: {
      type: String,
      required: false
    }
  },
  setup (props) {
    const { locale } = useI18n()
    const isMobile = computed(() => props.mode === 'mobile')

    function changeLang (language: string) {
      locale.value = language
    }
    return {
      changeLang,
      isMobile
    }
  }
})
</script>

<style lang="scss" scoped>
.lang {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  min-width: 200px;

  &-box {
    width: 2.2rem;
    height: 2.2rem;
    padding-bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: rgba(#111, 0.4);
    border-radius: 50%;
    transition: 0.1s;

    &:hover {
      background: $color-primary;
      color: $color-white;
    }
  }
}

.mobile__lang {
  list-style: none;
  display: flex;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%, 0);
  color: rgba($color-white, 0.6);
  max-width: 150px;
  width: 100%;
  justify-content: space-evenly;
  font-size: 1.4rem;

  &-box {
    cursor: pointer;
  }

  &-box:hover {
    color: $color-primary;
  }
}

@media (max-width: 768px) {
  .lang {
    display: none;
  }
}
</style>

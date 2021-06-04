<template>
  <ul class="headerBottom__nav" ref="navEl">
    <li>
      <router-link to="/" class="headerBottom__nav--link">
        {{ t('navigation.home') }}
      </router-link>
    </li>
    <li>
      <router-link to="/search" class="headerBottom__nav--link">
        {{ t('navigation.meals') }}
      </router-link>
    </li>
    <li>
      <router-link to="/about" class="headerBottom__nav--link">
        {{ t('navigation.about') }}
      </router-link>
    </li>
    <li>
      <router-link
        to="/editProfile"
        class="headerBottom__nav--link login"
      >
        {{ t('navigation.settings') }}
      </router-link>
    </li>
    <li>
      <a
        href="https://profile-d6420.firebaseapp.com/"
        class="headerBottom__nav--link"
        target="_blank"
      >
        {{ t('navigation.projects') }}
      </a>
    </li>
  </ul>
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
.headerBottom {
  &__nav {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    position: sticky;
  }

  &__nav--link {
    font-size: 14px;
    padding: 0 12px;
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: all 140ms ease;

    &:hover {
      color: hsl(46, 84%, 66%);
    }

    &.router-link-exact-active {
      color: hsl(46, 84%, 53%);
    }
  }
}

@media (max-width: 768px) {
  .headerBottom {
    &__nav {
      padding: 0.5rem 0;
    }

    &__nav--link {
      padding: 0 8px;
    }
  }
}
</style>

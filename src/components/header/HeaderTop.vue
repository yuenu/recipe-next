<template>
  <div class="headerTop">
    <div class="headerTop__phone">
      <PhoneIcon class="headerTop__phone--icon" />
      <a href="tel: 0988-XXX-XXX" class="headerTop__phone--description">
        0988-XXX-XXX
      </a>
    </div>
    <div class="headerTop__logo">
      <router-link to="/" class="headerTop__logo--link">
        <img src="@/assets/example/logo.png" alt="logo" />
      </router-link>
    </div>

    <div class="headerTop__address">
      <LocationIcon class="headerTop__address--icon" />
      <span class="headerTop__address--description">
        {{ t('home.header.location')}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LocationIcon from '@/components/UI/Icon/Location.vue'
import PhoneIcon from '@/components/UI/Icon/Phone.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    LocationIcon,
    PhoneIcon
  },
  setup () {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.headerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__phone {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 200px;

    &--icon {
      width: 30px;
      fill: $color-primary;
    }

    &--description {
      margin-left: 3px;
      text-decoration: none;
      font-size: 1.3rem;
      color: $color-gray-dark-1;
    }
  }

  &__address {
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      fill: $color-primary;
    }

    &--description {
      margin-left: 5px;
      text-decoration: none;
      font-size: 1.3rem;
      color: $color-gray-dark-1;
    }
  }

  &__logo {
    margin-bottom:-8px;
  }
}

@media (max-width: 1024px) {
  .headerTop__address--description,
  .headerTop__phone--description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .headerTop__lang {
    display: none;
  }

  .headerTop {
    flex-direction: column;

    &__logo {
      order: -1;
    }

    &__address,
    &__phone {
      margin: 5px 0;
    }
  }
}
</style>

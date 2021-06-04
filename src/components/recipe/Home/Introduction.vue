<template>
  <div class="introduction-section">
    <div class="introduction">
      <div class="introduction__content">
        <div class="introduction__heading">{{ t('home.intro.heading') }}</div>
        <div class="introduction__rate">
          <Star />
        </div>
        <div class="introduction__description">
          {{ t('home.intro.description') }}
        </div>
        <CtaButton class="ctaButton introduction__ctaButton" />
        <div class="introduction__descriptionIcon">
          <div
            class="introduction__descriptionIcon-box"
            v-for="item in descriptionIcon"
            :key="item.id"
          >
            <img
              :src="item.src"
              :alt="item.text"
              class="introduction__descriptionIcon-img"
            />
            <div class="introduction__descriptionIcon-text">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="introduction__pic">
        <img
          class="introduction__pic-img"
          src="@/assets/example/bg3.png"
          alt="bg3"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue'
import Star from '@/components/UI/Icon/Star.vue'
import CtaButton from '@/components/UI/CtaButton.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    CtaButton,
    Star
  },
  setup () {
    const { t } = useI18n()
    const descriptionIcon = computed(() => {
      return [
        {
          id: 1,
          text: t('home.intro.icon1'),
          src: require('@/assets/icon/cook.svg')
        },
        {
          id: 2,
          text: t('home.intro.icon2'),
          src: require('@/assets/icon/cook-self.svg')
        },
        {
          id: 2,
          text: t('home.intro.icon3'),
          src: require('@/assets/icon/idea.svg')
        }
      ]
    })

    return { descriptionIcon, t }
  }
})
</script>

<style lang="scss" scoped>
.introduction-section {
  max-width: $container-max-width;
  width: 100%;
  margin: 5rem 0 3rem 0;
  padding: 2rem 0;
}

.introduction {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 90px;
  justify-items: center;
  align-items: center;

  &__heading {
    font-size: 42px;
    font-weight: 400;
  }

  &__ctaButton {
    color: #333;
  }

  &__descriptionIcon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    padding: 0 10rem 0 0;
  }

  &__descriptionIcon-box:nth-child(3) &__descriptionIcon-img {
    width: 50px;
  }

  &__descriptionIcon-img {
    width: 45px;
    height: auto;
    margin: 5px auto;
    display: block;
  }

  &__descriptionIcon-text {
    text-align: center;
  }

  &__pic,
  &__pic-img {
    width: 100%;
  }
}

@media (max-width: 1330px) {
  .introduction__content {
    padding: 0 0 0 20px;
  }
}

@media (max-width: 920px) {
  .introduction-section {
    margin: 0;
    border-bottom: 5px solid #ddd;
    border-top: 5px solid #ddd;
  }

  .introduction {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 30px;

    &__content {
      padding: 0 1.2rem;
    }

    &__pic {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__pic {
      margin: 1.2rem 0;
    }

    &__pic-img {
      width: 70%;
    }
  }
}

@media (max-width: 500px) {
  .introduction {
    display: block;

    &__content {
      padding: 0 1rem;
    }

    &__descriptionIcon {
      justify-content: initial;
      padding: 0;

      &-box {
        margin-right: 5rem;
      }
    }
  }
}
</style>

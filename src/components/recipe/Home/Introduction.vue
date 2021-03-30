<template>
  <div class="introduction-section">
    <div class="introduction">
      <div class="introduction__content">
        <div class="introduction__heading">Pizza Express Margherita</div>
        <div class="introduction__rate">
          <Star class="introduction__rate-star" />
          <Star class="introduction__rate-star" />
          <Star class="introduction__rate-star" />
          <Star class="introduction__rate-star" />
          <Star class="introduction__rate-star" />
        </div>
        <div class="introduction__description">
          Pizza, dish of Italian origin consisting of a flattened disk of bread
          dough topped with some combination of olive oil, oregano, tomato,
          olives, mozzarella or other cheese, and many other ingredients, baked
          quickly—usually, in a commercial setting, using a wood-fired oven
          heated to a very high temperature—and served hot.
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
        <img src="@/assets/example/bg3.png" alt="bg3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Star from '@/components/UI/Icon/Star.vue'
import CtaButton from '@/components/UI/CtaButton.vue'

export default defineComponent({
  components: {
    CtaButton,
    Star
  },
  setup () {
    const descriptionIcon = [
      {
        id: 1,
        text: 'Fast',
        src: require('@/assets/icon/cook.svg')
      },
      {
        id: 2,
        text: 'Health',
        src: require('@/assets/icon/cook-self.svg')
      },
      {
        id: 2,
        text: 'Idea',
        src: require('@/assets/icon/idea.svg')
      }
    ]
    return { descriptionIcon }
  }
})
</script>

<style lang="scss" scoped>
$star-color: #fdb926;

.introduction-section {
  max-width: 1330px;
  margin: 5rem 0 3rem 0;
}

.introduction {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 90px;
  justify-items: center;
  align-items: center;

  &__heading {
    font-size: 48px;
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
    margin: 4.5rem 10rem 0 0;
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

  &__rate-star {
    fill: $star-color;
    width: 12px;
    margin: 0 2px;
  }
}

@media (max-width: 1330px) {
  .introduction__content {
    padding: 0 0 0 20px;
  }
}

@media (max-width: 920px) {
  .introduction {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    &__content {
      padding: 0 5rem;
    }
  }
}

@media (max-width: 476px) {
  .introduction__content {
    padding: 0 1rem;
  }
}
</style>

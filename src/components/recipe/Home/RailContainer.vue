<template>
  <div class="railContainer">
    <div class="railContainerWrapper">
      <div
        class="detailBox"
        v-for="item in data"
        :key="item.id"
      >
        <div class="detailBox__body">
          <img
            class="detailBox__photo"
            :src="item.img"
            alt="img"
          />
          <h2 class="detailBox__heading">{{ item.title }}</h2>
          <p class="detailBox__description">
            {{ item.description }}
          </p>
        </div>
        <button className="detailBox__btn">View Recipe</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup () {
    const { t } = useI18n()

    const data = ref([
      {
        id: 1,
        img: require('@/assets/example/img1.jpg'),
        title: t('home.rail.salay.heading'),
        description: t('home.rail.salay.description')
      },
      {
        id: 2,
        img: require('@/assets/example/img2.jpg'),
        title: t('home.rail.baked.heading'),
        description: t('home.rail.baked.description')
      },
      {
        id: 3,
        img: require('@/assets/example/img3.jpg'),
        title: t('home.rail.risotto.heading'),
        description: t('home.rail.risotto.description')
      },
      {
        id: 4,
        img: require('@/assets/example/img4.jpg'),
        title: t('home.rail.mixin.heading'),
        description: t('home.rail.mixin.description')
      }
    ])
    return { data }
  }
})
</script>

<style lang="scss" scoped>
.railContainer {
  width: 100%;
  min-height: 40rem;
  padding: 2rem 10px;
}

.railContainerWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
}

.detailBox {
  overflow: hidden;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in;
  color: #333;
  background: #fff;
  border: 2px solid rgba(220, 220, 220, 0.4);

  &__photo {
    height: 18rem;
    width: 100%;
    object-fit: cover;
  }

  &__heading {
    padding: 1rem;
  }

  &__description {
    padding: 0 1rem;
  }

  &__btn {
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid $color-red-dark;
    background: transparent;
    color: $color-red-dark;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 2px 5px 20px #83858a;
    border: 2px solid rgba(220, 220, 220, 0.1);
  }

  &:hover &__btn {
    background: $color-red-dark;
    color: $color-white;
  }
}

@media (max-width: 1024px) {
  .railContainerWrapper {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .detailBox {
    max-width: 450px;
  }
}

@media (max-width: 650px) {
  .railContainerWrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<template>
  <div class="categoryDisplay">
    <div class="container">
      <div class="card">
        <div
          class="card__box"
          v-for="item in onCategories"
          :key="item.idCategory"
        >
          <div class="card__content">
            <h2 class="card__content--heading">{{ item.strCategory }}</h2>
            <div class="card__content--details">
              {{ textEllipsis(item.strCategoryDescription) }}
            </div>
          </div>
          <div class="visitCategory" :title="item.strCategory">
            <Check class="visitCategory__img" />
          </div>
          <div class="card__img-box">
            <img
              :src="item.strCategoryThumb"
              :alt="'Photo-' + item.strCategory"
              class="card__img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import recipeStore from '@/store/index'
import type { Category } from '@/apis/response.type'
import Check from '@/components/UI/Icon/Check.vue'

export default defineComponent({
  components: {
    Check
  },
  setup () {
    const store = inject('store', recipeStore)
    const onCategories = ref<Category[]>([])

    function textEllipsis (text: string) {
      const maxTextCount = 212
      return text.substring(0, maxTextCount - 1) + '...'
    }

    onBeforeMount(async () => {
      const categorayData = await store.GET_CATEGORY()
      if (categorayData) { onCategories.value = categorayData.filter((item) => +item.idCategory <= 3) }
    })
    return { onCategories, textEllipsis }
  }
})
</script>

<style lang="scss" scoped>
.categoryDisplay {
  width: 100%;
  height: auto;
  margin: 0 0 3rem 0;
  padding:2rem 0;
}

.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__box {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      flex-direction: column-reverse;
      justify-content: flex-end;
    }
  }

  &__content {
    padding: 0 2rem;

    &--heading {
      font-weight: 400;
      font-size: 2.7rem;
      color: $color-gray-dark-1;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    &--details {
      font-family: 'Montserrat', Sans-serif;
      font-size: 0.9rem;
      line-height: 1.8rem;
      letter-spacing: 1px;
    }
  }

  &__img,
  &__img-box {
    width: 100%;
  }
}

.visitCategory {
  width: 50px;
  height: 50px;
  background: #ffc139;
  border-radius: 50%;
  cursor: pointer;
  margin: 1rem 0 1rem 1.8rem;
  user-select: none;
  transition: all 0.1s ease;

  &__img {
    width: 20px;
    display: block;
    margin: auto;
    fill: #fff;
  }

  &:hover {
    background: #333;
  }

  &:hover &__img {
    fill: #ffc139;
  }
}

@media (max-width: 920px) {
  .categoryDisplay {
    margin:0;
    border-bottom:5px solid #ddd;
  }
  .card {
    grid-template-columns: 1fr;

    &__box:nth-child(2) {
      flex-direction: column;
    }

    &__content {
      text-align: center;
    }

    &__img-box {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__img {
      width: 60%;
    }
  }

  .visitCategory {
    margin: 1rem auto;
  }
}

@media (max-width: 476px) {
  .card__img {
    width: 70%;
  }
}
</style>

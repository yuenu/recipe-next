<template>
  <div class="product">
    <div class="product__container">
      <div class="product-box--1">
        <img
          src="@/assets/example/bg2-1.png"
          alt="bg2-1"
          class="product__bg"
        />
        <div class="product__body--1">
          <img
            class="product__dress"
            src="@/assets/favorite.png"
            alt="favorite"
          />
          <div class="product__description u-text-align-center">
            <h2 class="product__description--1">Multiple</h2>
            <h6 class="product__description--2">
              More than 6000 kinds of meals
            </h6>
          </div>
        </div>
      </div>
      <div class="product-box--2">
        <img
          src="@/assets/example/bg2-2.png"
          alt="bg2-2"
          class="product__bg"
        />
        <div class="product__body--2">
          <div class="product__description u-text-align-center">
            <h2 class="product__description--1">special meals</h2>
            <h1 class="product__description--2">1 month free</h1>
            <h6 class="product__description--3">
              Use our recipe to happy meals
            </h6>
          </div>
        </div>
      </div>
      <div class="product-box--3">
        <img
          src="@/assets/example/bg2-3.png"
          alt="bg2-3"
          class="product__bg"
        />
        <div class="product__body--3">
          <img
            class="pic3__dress product__dress"
            src="@/assets/health.png"
            alt="health"
          />
          <div class="product__description u-text-align-center">
            <h2 class="product__description--1">Cookself</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  max-width: 1330px;
  padding: 2rem 0;

  &__container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
  }

  &__bg,
  &__dress {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-box--1,
  &-box--2,
  &-box--3 {
    position: relative;
  }

  &__body--1 &__dress {
    position: absolute;
    bottom: 10.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: auto;
  }

  &__body--3 &__dress {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 70%;
    height: auto;
    transform: translate(-50%, 0) rotate(-4deg);
  }
  // Boxing content
  &__body--1 &__description {
    position: absolute;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);

    &--1 {
      font-size: 3rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 500;
    }

    &--2 {
      font-size: 1rem;
    }
  }

  &__body--2 &__description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    &--1 {
      font-size: 3rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 500;
    }

    &--2 {
      font-size: 4rem;
    }

    &--3 {
      font-size: 1rem;
      font-weight: 300;
    }
  }

  &__body--3 &__description {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    &--1 {
      font-weight: 500;
      font-size: 3rem;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 1024px) {
  .product {
    &__container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    &-box--2 {
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    &__body--1 &__dress {
      width: 70%;
    }

    &__body--3 &__dress {
      width: 50%;
    }

    &__body--1 &__description--1,
    &__body--3 &__description--1 {
      font-size: 2.6rem;
    }
  }
}

@media (max-width: 920px) {
  .product {
    border-bottom: 5px solid $color-gray-light-1;
  }
}

@media (max-width: 476px) {
  .product {
    &__container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }

    &-box--2 {
      grid-column: 1 / span 1;
      grid-row: 1;
    }

    &__body--1 &__description--1,
    &__body--3 &__description--1 {
      font-size: 3.2rem;
    }
  }
}
</style>

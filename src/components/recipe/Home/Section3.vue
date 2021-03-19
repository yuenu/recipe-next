<template>
  <div class="sec3">
    <div class="sec3__container">
      <div class="pic1">
        <img src="@/assets/example/bg2-1.png" alt="bg2-1" />
        <div class="pic1__body">
          <img
            class="pic1__dress"
            src="@/assets/favorite.png"
            alt="favorite"
          />
          <div class="pic1__text">
            <h2 class="pic1__text__t1">Multiple</h2>
            <h6 class="pic1__text__t2">More than 6000 kinds of meals</h6>
          </div>
        </div>
      </div>
      <div class="pic2">
        <img src="@/assets/example/bg2-2.png" alt="bg2-2" />
        <div class="pic2__body">
          <div class="pic2__text">
            <h2 class="pic2__text__t1">special meals</h2>
            <h1 class="pic2__text__t2">1 month free</h1>
            <h6 class="pic2__text__t3">Use our recipe to happy meals</h6>
          </div>
        </div>
      </div>
      <div class="pic3">
        <img src="@/assets/example/bg2-3.png" alt="bg2-3" />
        <div class="pic3__body">
          <img
            class="pic3__dress"
            src="@/assets/health.png"
            alt="heath"
          />
          <div class="pic3__text">
            <h2 class="pic3__text__t1">Cookself</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

.sec3 {
  max-width: 1330px;
  margin: 2rem 0;

  &__container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
  }
}

.pic1 {
  position: relative;

  &__dress {
    position: absolute;
    bottom: 10.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: auto;
  }

  &__text {
    position: absolute;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  &__text__t1 {
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }

  &__text__t2 {
    font-size: 1rem;
  }
}

.pic2 {
  position: relative;

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  &__text__t1 {
    font-size: 3rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
  }

  &__text__t2 {
    font-size: 4rem;
  }

  &__text__t3 {
    font-size: 1rem;
    font-weight: 300;
  }
}

.pic3 {
  position: relative;

  &__dress {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 70%;
    height: auto;
    transform: translate(-50%, 0) rotate(-4deg);
  }

  &__text {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  &__text__t1 {
    font-weight: 500;
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
  }
}

@media (max-width: 1024px) {
  .sec3__container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .pic2 {
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  .pic1__dress {
    width: 70%;
  }

  .pic3__dress {
    width: 50%;
  }

  .pic1__text__t1 {
    font-size:2.6rem;
  }

  .pic3__text__t1 {
    font-size: 2.6rem;
  }
}

@media (max-width: 720px) {
}

@media (max-width: 476px) {
  img {
    object-fit: cover;
  }

  .sec3__container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .pic2 {
    grid-column: 1 / span 1;
    grid-row: 1;
  }

    .pic1__text__t1 {
    font-size:3.2rem;
  }

  .pic3__text__t1 {
    font-size: 3.2rem;
  }
}
</style>

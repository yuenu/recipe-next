<template>
  <div class="donate">
    <img
      src="@/assets/example/coffee.png"
      alt="coffee"
      class="donate__img"
    />
    <div class="donate__content">
      <img src="@/assets/example/free-1.png" alt="free" />
      <div class="donate__heading">Drink</div>
      <div class="donate__sub">Buy me a coffee</div>
      <button class="sponsor-btn">Donate</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.donate {
  align-self: end;
  width: calc(100% - 1rem);
  background-color: rgba($color-primary, 0.8);
  height: 460px;
  float: right;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__img {
    width: 100%;
    object-fit: cover;
    max-width: 250px;
    // position: absolute;
    // top: 50%;
    // left: 5%;
    // transform: translate(0, -50%);
  }

  &__content {
    position: relative;
    top: -15%;
  }

  &__heading {
    font-size: 2.2rem;
    position: absolute;
    white-space: nowrap;
    left: 30%;
    top: 70%;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &__sub {
    position: absolute;
    bottom: -30%;
    left: 10px;
  }
}

.sponsor-btn {
  padding: 8px 36px;
  background: rgba($color-primary, 0.7);
  color: $color-white;
  border: 0;
  border-radius: 100px;
  transition: background-color 0.3s ease-out;
  box-shadow: 1px 4px 10px rgba($color-black, 0.2);

  cursor: pointer;
  position: absolute;
  bottom: -100px;
  left: 14px;
  font-family: inherit;
  font-size: 20px;

  &:hover {
    background: $color-primary;
  }

  &:active {
    transform: translate(0px, 1px);
    box-shadow: 1px 2px 8px rgba($color-black, 0.2);
  }
}

@media (max-width: 1100px) {
  .donate {
    width: calc(100% - 2rem);
    float: none;
  }
}

@media (max-width: 940px) {
  .donate {
    width: 100%;
  }
}

@media (max-width: 650px) {
  .donate {
    flex-direction: column;
    width: 98%;
    margin: 0 auto;
    height: 600px;
    justify-content: flex-start;

    &__img {
      margin-top: 20px;
    }

    &__content {
      top: 5%;
    }
  }
}
</style>

<template>
  <div class="subscribe">
    <div class="bg"></div>
    <div class="content">
      <div class="content__text">
        <div class="content__text__title">Subscribe Now!!!</div>
        <hr />
        <div class="content__text__sub">We provide 200+ recipes to subscriber every week 1 random recipe</div>
      </div>
      <input
        type="email"
        class="content__input"
        placeholder="123@gmail.com"
      />
      <button class="content__submit">Subscribe</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  height: 400px;
  position: relative;
  background: rgb(221, 151, 29);
  background: linear-gradient(
    90deg,
    rgba(221, 151, 29, 0.27) 0%,
    rgba(233, 148, 148, 0.27) 100%
  );
  margin: 5rem 0;
  padding-top: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  background: url('../../assets/bg-n.png');
  background-repeat: no-repeat;
  width: 550px;
  height: 100%;
  opacity: 0.75;
}

hr {
  margin: 8px 0;
}

.content {
  margin-left: 50px;

  &__text {
    margin-bottom: 24px;
  }

  &__text__title {
    font-size: 30px;
  }

  &__input {
    display: block;
    padding: 12px 10px;
    font-size: 20px;
    outline: none;
    width: 300px;
    border: 1px solid #c4ebfc;
    margin-bottom: 22px;
  }

  &__submit {
    font-size: 16px;
    outline: none;
    border: 1px solid #c4ebfc;
    background: #79a7bb;
    color: #fff;
    padding: 11px 18px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background: #5e92a8;
      border: 1px solid #5e92a8;
    }

    &:active {
      background: #3f768d;
      border: 1px solid #3f768d;
    }
  }
}
</style>

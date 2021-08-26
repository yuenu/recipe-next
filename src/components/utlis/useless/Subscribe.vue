<template>
  <div class="subscribe">
    <div class="bg">
      <img src="../../assets/bg-n.png" alt="" />
    </div>
    <div class="bg-1"></div>
    <div class="content">
      <div class="content__text">
        <div class="content__text__title u-align-items-center">
          SIGN UP FOR OUR UPDATE
        </div>
        <hr />
        <div class="content__text__sub">
          To stay up-to-date on our promotions, discounts, sales, special offers
          and more.
        </div>
      </div>
      <div class="email">
        <input
          type="email"
          class="email__input"
          placeholder="your@gmail.com"
        />
        <div class="email__submit">
          <Email />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Email from '@/components/UI/Icon/Email.vue'

export default defineComponent({
  components: {
    Email
  }
})
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  height: fit-content;
  min-height: 400px;
  position: relative;
  background: rgb(221, 151, 29);
  background: linear-gradient(
    90deg,
    rgba(221, 151, 29, 0.27) 0%,
    rgba(233, 148, 148, 0.27) 100%
  );
  margin: 1rem 0;
  padding-top: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10vw;
}

.bg {
  max-width: 550px;
  width: 100%;
  height: auto;
  opacity: 0.75;
  padding-top: 3vh;
  img {
    width: 70%;
    display: block;
    margin: auto;
  }
}

.bg-1 {
  background: url('../../assets/example/group-3.png') no-repeat bottom right;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: -1;
  opacity: 0.5;
}

hr {
  margin: 8px 0 16px;
}

.content {
  max-width: 350px;

  &__text {
    margin-bottom: 24px;
  }

  &__text__title {
    font-size: 30px;
  }
}

.email {
  max-width: 300px;
  position: relative;

  &__input {
    display: block;
    padding: 12px 0 12px 20px;
    font-size: 12px;
    outline: none;
    width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 23px;

    &:focus {
      box-shadow: 0px 0px 5px #979797;
    }
  }

  &__submit {
    position: absolute;
    top: 0;
    right: 2px;
    height: auto;
    width: 30px;
    padding-top: 7px;

    cursor: pointer;

    svg {
      width: 18px;
    }

    &:hover svg {
      fill: #ffc139;
    }

    &:active svg {
      fill: #9b6a00;
    }
  }
}

@media (max-width: 940px) {
  .subscribe {
    padding: 0 3vw;
  }

  .bg img {
    margin: 0;
  }
}

@media (max-width: 768px) {
  .subscribe {
    flex-direction: column;
  }

  .bg img {
    width: 50%;
    margin: 0 auto;
  }

  .content {
    margin: 5vh 0;

    &__text {
      width: 300px;
    }
  }

  .email {
    margin: 0 auto;
  }
}
</style>

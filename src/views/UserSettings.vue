<template>
  <div class="user-settings">
    <div class="card">
      <h1 class="card__title u-align-items-center">個人資料</h1>
      <form>
        <div class="card__input user">
          <label
            for="uName"
          ><span class="card__label">Username:</span>
            {{ fakeData[0].userName }}</label>
          <input
            type="text"
            placeholder="Your user name"
            autocomplete="username"
          />
        </div>
        <div class="card__input password">
          <label
            for="uName"
          ><span class="card__label">Eamil:</span>
            {{ fakeData[0].email }}</label>
          <input type="eamil" placeholder="Your user eamil" />
        </div>
        <div class="card__input password">
          <label for="uName"><span class="card__label">Password:</span></label>
          <input
            type="password"
            placeholder="Your password"
            autocomplete="current-password"
          />
        </div>
        <button class="button" type="submit">修改</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const fakeData = [
  {
    userName: 'yuenu',
    email: 'abc@gamil.com'
  }
]

export default defineComponent({
  setup () {
    return {
      fakeData
    }
  }
})
</script>

<style lang="scss" scoped>
.user-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 5rem;
}

.card {
  background-color: #fff;
  padding: 30px 40px 50px 40px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px rgb(91, 91, 91);
  max-width: 400px;
  width: max-content;
  border: 1px solid rgb(91, 91, 91);

  &__title {
    margin: 0rem 0 2.2rem 0;
    font-size: 28px;
    font-weight: normal;
  }

  &__input {
    margin: 16px 0;
    width: 100%;

    label {
      min-width: 100px;
      padding-right: 10px;
      margin-bottom: 5px;
      display: inline-block;
    }

    input {
      width: 100%;
      padding: 8px 0 8px 10px;
    }
  }

  &__label {
    color: #ffffff;
    background: #2196f3;
    padding: 2px 5px;
  }
}

.button {
  margin-top: 10px;
  padding: 10px 18px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: #2196f3;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: initial;

  &:hover {
    background-color: #3ea6fa;
    color: #fff;
  }
}
</style>

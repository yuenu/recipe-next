<template>
  <div class="user-settings">
    <div class="card">
      <h1 class="card__title">個人資料</h1>
      <form @submit.prevent="submitProfile">
        <div class="card__input user">
          <label for="uName"><span class="card__label">username:</span>  {{ fakeData[0].userName }}</label>
          <input type="text" placeholder="Your user name" />
        </div>
        <div class="card__input password">
          <label for="uName"><span class="card__label">Eamil:</span>  {{ fakeData[0].email }}</label>
          <input type="eamil" placeholder="Your user eamil" />
        </div>
        <div class="card__input password">
          <label for="uName"><span class="card__label">Password:</span></label>
          <input type="password" placeholder="Your password" />
        </div>
        <button class="button" type="submit">修改</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const fakeData = [
      {
        userName: 'yuenu',
        email: 'abc@gamil.com'
      }
    ]
    const submitProfile = () => {
      console.log('sumbit the data!!!')
    }

    return {
      submitProfile,
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
  min-height: calc(100vh - 91px);
  width: 100%;
}

.card {
  background-color: #fff;
  padding: 30px 40px 50px 40px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(91, 91, 91);
  max-width: 400px;
  width: max-content;

  &__title {
    text-align: center;
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
      margin-bottom:5px;
      display:inline-block;
    }

    input {
      width: 100%;
      padding: 8px 0 8px 10px;
    }
  }

  &__label {
    color:#ffffff;
    background:#2196f3;
    padding:2px 5px;
  }
}

.button {
  margin-top:10px;
  padding: 10px 18px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: rgb(60, 60, 196);
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background-color: rgb(81, 81, 199);
    color: #fff;
  }
}
</style>

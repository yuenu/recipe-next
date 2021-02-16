<template>
  <div class="header">
    <input
      type="checkbox"
      id="check"
      v-model="mobileMenuControl"
    />
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo__link">Recipe</router-link>
      </div>
      <SearchForm class="search" />
      <div class="container__left">
        <ul class="item__list">
          <li><router-link to="/" class="item__link othersPro">其他作品</router-link></li>
          <li><router-link to="/" class="item__link collect">收藏食譜</router-link></li>
          <li><router-link to="/editProfile" class="item__link login">個人設定</router-link></li>
        </ul>
      </div>
    </div>
    <div class="hamburger">
      <div class="hamburger__menu">
        <span class="menuicon-top"></span>
        <span class="menuicon-bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SearchForm from './SearchForm'

export default defineComponent({
  components: {
    SearchForm
  },
  setup () {
    const mobileMenuControl = ref(false)

    return {
      mobileMenuControl
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 1px 3px #bbb;
}

.container {
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__link {
  display: inline-block;
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 600;
  color: #f4a261;
  font-family: 'Syne Tactile', cursive;
  margin-bottom: 8px;
  margin-left: 30px;
  -webkit-text-stroke: 1px red;
  -webkit-text-fill-color: transparent;

  &:hover {
    -webkit-text-fill-color: red;
  }
}

.item__list {
  display: flex;
  list-style: none;
  max-width: 300px;
  margin-right: 20px;

  .item__link {
    padding: 10px 15px;
    text-decoration: none;
    color: rgb(20, 20, 20);
    font-weight: 600;
    transition: all 140ms ease;
    border-radius: 25px;

    &:hover {
      background: rgb(60, 60, 196);
      color: #eee;
    }
  }
}

.hamburger {
  position: absolute;
  top: 1.5%;
  right: 3%;

  &__menu {
    width: 34px;
    height: 34px;
    background: cadetblue;
    position: relative;
    display: none;
  }

  .menuicon-top,
  .menuicon-bottom {
    width: 17px;
    height: 2px;
    position: absolute;
    background: #000;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.2806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
    border-radius: 14px;
  }

  .menuicon-top {
    top: 10px;
  }

  .menuicon-bottom {
    bottom: 10px;
  }
}

#check {
  position: absolute;
  top: 1.5%;
  right: 3%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  z-index: 999;
  opacity: 0;
  display: none;
}

#check:checked ~ .hamburger .menuicon-top {
  transform: rotate(-45deg) translate(-50%, 0);
}

#check:checked ~ .hamburger .menuicon-bottom {
  transform: rotate(45deg) translate(-50%, 0);
}

@media (max-width: 768px) {
  #check,
  .hamburger__menu {
    display: block;
  }

  .container__left {
    display: none;
  }
}
</style>

<template>
  <div class="header">
    <input
      type="checkbox"
      id="check"
      v-model="isMobileOpen"
    />
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo__link">Recipe</router-link>
      </div>
      <SearchForm class="search" />
      <div class="container__left">
        <ul class="item__list">
          <li>
            <a
              href="https://profile-d6420.firebaseapp.com/"
              class="item__link othersPro"
              target="_blank"
            >
              其他作品
            </a>
          </li>
          <li>
            <router-link
              to="/search"
              class="item__link collect"
            >收藏食譜</router-link>
          </li>
          <li>
            <router-link
              to="/editProfile"
              class="item__link login"
            >個人設定</router-link>
          </li>
        </ul>
      </div>
      <div class="ham"></div>
    </div>
    <div class="hamburger">
      <div class="hamburger__menu">
        <span class="menuicon-top"></span>
        <span class="menuicon-bottom"></span>
      </div>
    </div>
    <BaseModal
      @close="isMobileOpen = false"
      :isMobileOpen="isMobileOpen"
      class="mobile__modal"
    >
      <ul class="mobile__list">
        <li class="mobile__item">
          <a
            href="https://profile-d6420.firebaseapp.com/"
            class="mobile__link othersPro"
            target="_blank"
          >
            Projects
          </a>
        </li>
        <li class="mobile__item">
          <router-link
            to="/"
            class="mobile__link collect"
          >
            MENU
          </router-link>
        </li>
        <li class="mobile__item">
          <router-link
            to="/editProfile"
            class="mobile__link login"
          >
            Settings
          </router-link>
        </li>
      </ul>
    </BaseModal>
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
    const isMobileOpen = ref(false)

    return {
      isMobileOpen
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  background: #fff;
}

.container {
  width: 100%;
  height: 100%;
  max-width: 1330px;
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
  margin-left: 18px;
  -webkit-text-stroke: 1px red;
  -webkit-text-fill-color: transparent;

  &:hover {
    -webkit-text-fill-color: red;
  }
}

.search {
  flex-grow: 1;
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
      background: #3c3cc4e5;
      color: #eee;
    }
  }
}

.hamburger {
  position: absolute;
  top: 10px;
  right: 3%;

  &__menu {
    width: 34px;
    height: 34px;
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
  top: 10px;
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

.mobile {
  &__list {
    list-style-type: none;
  }

  &__link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 20px 28px;
    margin: 10px 0;
    border-radius: 3px;
    font-size: 26px;
    background: rgb(72, 72, 72);
    transition: all 300ms ease;
  }

  &__link:hover {
    background: rgb(100, 100, 100);
  }
}

@media (max-width: 1100px) {
  .item__list {
    margin-right: 50px;
  }
}

@media (max-width: 768px) {
  #check,
  .hamburger__menu {
    display: block;
  }

  .container__left {
    display: none;
  }

  .ham {
    width: 53px;
    height: 100%;
    display: flex;
  }
}
</style>

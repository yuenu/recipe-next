<template>
  <div class="header">
    <input
      type="checkbox"
      id="check"
      v-model="isMobileOpen"
    />
    <div class="header__container">
      <div class="headerTop">
        <div class="headerTop__logo">
          <router-link to="/" class="headerTop__logo--link">
            <img src="@/assets/logo.png" alt="logo" />
          </router-link>
        </div>
        <ul class="headerTop__lang">
          <li class="headerTop__lang-box lang--cn">簡</li>
          <br />
          <li class="headerTop__lang-box lang--tw">繁</li>
          <br />
          <li class="headerTop__lang-box lang--en">EN</li>
        </ul>
      </div>
      <div class="headerBottom" ref="headerBottom">
        <SearchForm class="headerBottom__search" />

        <ul class="headerBottom__nav">
          <li>
            <router-link to="/" class="headerBottom__nav--link">
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/search"
              class="headerBottom__nav--link"
            >Melas
            </router-link>
          </li>
          <li>
            <a
              href="https://profile-d6420.firebaseapp.com/"
              class="headerBottom__nav--link"
              target="_blank"
            >
              Projrcts
            </a>
          </li>
          <li>
            <router-link
              to="/editProfile"
              class="headerBottom__nav--link login"
            >
              Settings
            </router-link>
          </li>
        </ul>

        <div class="headerBottom__social">
          <Facebook class="headerBottom__social--img" />
          <Twitter class="headerBottom__social--img" />
          <Instagram class="headerBottom__social--img" />
        </div>
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
      <ul class="mobile__nav">
        <li class="mobile__item">
          <a
            href="https://profile-d6420.firebaseapp.com/"
            class="mobile__link"
            target="_blank"
          >
            Projects
          </a>
        </li>
        <li class="mobile__item">
          <router-link to="/" class="mobile__link"> MENU </router-link>
        </li>
        <li class="mobile__item">
          <router-link to="/editProfile" class="mobile__link">
            Settings
          </router-link>
        </li>
      </ul>
    </BaseModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SearchForm from './SearchForm.vue'
import Facebook from '@/components/UI/Icon/Facebook.vue'
import Twitter from '@/components/UI/Icon/Twitter.vue'
import Instagram from '@/components/UI/Icon/Instagram.vue'

export default defineComponent({
  components: {
    SearchForm,
    Facebook,
    Twitter,
    Instagram
  },
  setup () {
    const isMobileOpen = ref(false)

    const headerBottom = ref<HTMLElement>()
    const headerBottomOffset = ref(0)

    const stickyHeader = () => {
      if (headerBottom.value) {
        if (window.pageYOffset > headerBottomOffset.value) {
          headerBottom.value.classList.add('sticky')
        } else {
          headerBottom.value.classList.remove('sticky')
        }
      }
    }

    onMounted(() => {
      // On mouted get headerBottom's offsetTop and store to headerBottomOffset
      if (headerBottom.value) {
        headerBottomOffset.value = headerBottom.value.offsetTop
      }
      document.addEventListener('scroll', () => {
        stickyHeader()
      })
    })

    return {
      isMobileOpen,
      headerBottom
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  background: #fff;
  margin-bottom: 2rem;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1330px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.headerTop {
  display: flex;
  align-items: center;
  width: 100%;

  &__logo {
    width: 130%;
    display: flex;
    align-items: flex-end;
  }

  &__logo--link {
    margin: 0 0 0 auto;
  }

  &__lang {
      width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
  }

  &__lang-box {
        padding: 5px 8px;
    margin: 0 4px;
    cursor: pointer;
    font-size: 14px;
    color: #333;

    &:hover {
      background: rgb(55, 55, 255);
      color: #fff;
    }
  }
}

.headerBottom {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  &__social {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0 10px 0 0;
  }

  &__social--img {
    margin-left: 23px;
    transition: 0.2s all ease;
    cursor: pointer;
    width: 16px;

    &:hover {
      fill: rgb(255, 206, 45);
    }
  }

  &__nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  &__nav--link {
    font-size: 14px;
    padding: 0 12px;
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: all 140ms ease;

    &:hover {
      color: rgb(177, 139, 16);
    }

    &.router-link-exact-active {
      color: rgb(255, 206, 45);
    }
  }

  &__search {
    display: flex;
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
  &__nav {
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

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
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

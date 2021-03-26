<template>
  <div class="header">
    <input
      type="checkbox"
      id="check"
      v-model="isMobileOpen"
    />
    <div class="header__container">
      <div class="cTop">
        <div class="cTop__logo">
          <router-link to="/" class="logo__link">
            <img src="@/assets/logo.png" alt="logo" />
          </router-link>
        </div>
        <ul class="lang">
          <li class="lang__item lang__cn">簡</li>
          <br />
          <li class="lang__item lang__tw">繁</li>
          <br />
          <li class="lang__item lang__en">EN</li>
        </ul>
      </div>
      <div class="cBottom" ref="cBottom">
        <SearchForm class="cBottom__search" />
        <div class="cBottom__nav">
          <ul class="item__list">
            <li>
              <router-link to="/" class="item__link"> Home </router-link>
            </li>
            <li>
              <router-link to="/search" class="item__link collect">
                Melas
              </router-link>
            </li>
            <li>
              <a
                href="https://profile-d6420.firebaseapp.com/"
                class="item__link othersPro"
                target="_blank"
              >
                Projrcts
              </a>
            </li>
            <li>
              <router-link to="/editProfile" class="item__link login">
                Settings
              </router-link>
            </li>
          </ul>
        </div>
        <div class="cBottom__social">
          <Facebook />
          <Twitter />
          <Instagram />
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
          <router-link to="/" class="mobile__link collect"> MENU </router-link>
        </li>
        <li class="mobile__item">
          <router-link to="/editProfile" class="mobile__link login">
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

    const cBottom = ref<HTMLElement>()
    const cBottomOffset = ref(0)

    const stickyHeader = () => {
      if (cBottom.value) {
        if (window.pageYOffset > cBottomOffset.value) {
          cBottom.value.classList.add('sticky')
        } else {
          cBottom.value.classList.remove('sticky')
        }
      }
    }

    onMounted(() => {
      // On mouted get cBottom's offsetTop and store to cBottomOffset
      if (cBottom.value) {
        cBottomOffset.value = cBottom.value.offsetTop
      }
      document.addEventListener('scroll', () => {
        stickyHeader()
      })
    })

    return {
      isMobileOpen,
      cBottom
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

.cTop {
  display: flex;
  align-items: center;
  width: 100%;

  &__logo {
    width: 130%;
    display: flex;
    align-items: flex-end;
  }

  .logo__link {
    margin: 0 0 0 auto;
  }
}

.lang {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;

  &__item {
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

.cBottom {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  &__social {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0 10px 0 0;

    svg {
      margin-left: 23px;
      transition: 0.2s all ease;
      cursor: pointer;
      width: 16px;

      &:hover {
        fill: rgb(255, 206, 45);
      }
    }
  }

  &__nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__search {
    display: flex;
  }
}

.item__list {
  display: flex;
  list-style: none;

  .item__link {
    font-size: 14px;
    padding: 0 12px;
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: all 140ms ease;

    &:hover {
      color: rgb(255, 206, 45);
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

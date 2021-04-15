<template>
  <header class="header">
    <input
      type="checkbox"
      id="check"
      v-model="onModalOpen"
      :class="['check', 'u-close-position', { active: onModalOpen }]"
    />
    <div class="header__container">
      <div class="headerTop">
        <div class="headerTop__phone">
          <Phone class="headerTop__phone--icon" />
          <a href="tel: 0988-XXX-XXX" class="headerTop__phone--desc">
            0988-XXX-XXX
          </a>
        </div>
        <div class="headerTop__logo">
          <router-link to="/" class="headerTop__logo--link">
            <img src="@/assets/example/logo.png" alt="logo" />
          </router-link>
        </div>

        <div class="headerTop__address">
          <Location class="headerTop__address--icon" />
          <span class="headerTop__address--desc">
            Xitun Dist., Taichung City
          </span>
        </div>
      </div>
      <div class="headerBottom">
        <ul class="lang">
          <li class="lang-box lang--cn">简</li>
          <br />
          <li class="lang-box lang--tw">繁</li>
          <br />
          <li class="lang-box lang--en">EN</li>
        </ul>
        <ul class="headerBottom__nav" ref="navEl">
          <li>
            <router-link to="/" class="headerBottom__nav--link">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/search" class="headerBottom__nav--link">
              Melas
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="headerBottom__nav--link">
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/editProfile"
              class="headerBottom__nav--link login"
            >
              Settings
            </router-link>
          </li>
          <li>
            <a
              href="https://profile-d6420.firebaseapp.com/"
              class="headerBottom__nav--link"
              target="_blank"
            >
              Others Projrcts
            </a>
          </li>
        </ul>
        <div class="headerBottom__last">
          <SocialLink class="socialLink" />
          <div class="headerBottom__last--find">
            <Search class="search-icon" @click="searchFormActive" />
            <div class="collection">
              <div :class="['collection__list', { active: onCollection }]">
                Favorite Meals
              </div>
              <Heart @onClick="heartClick" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hamburger u-close-position">
      <div :class="['hamburger__menu', { active: onModalOpen }]">
        <span class="menuicon-top"></span>
        <span class="menuicon-bottom"></span>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <BaseModal
        @click.self="onModalOpen = false"
        :onModalOpen="onModalOpen && !onSearchFormOpen"
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
    </transition>

    <transition name="fade" mode="out-in">
      <BaseModal
        :onModalOpen="onSearchFormOpen && onModalOpen"
        @click.self="onModalOpen = false"
      >
        <div class="search-box">
          <SearchForm :searchActive="onModalOpen" @searchSubmit="onModalOpen = false" />
        </div>
      </BaseModal>
    </transition>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  watchEffect
} from 'vue'

// Icon
import Location from '@/components/UI/Icon/Location.vue'
import Phone from '@/components/UI/Icon/Phone.vue'
import Heart from '@/components/UI/Icon/Heart.vue'
import Search from '@/components/UI/Icon/Search.vue'

import SocialLink from '@/components/layout/SocialLink.vue'
import SearchForm from '@/components/layout/SearchForm.vue'

export default defineComponent({
  components: {
    Location,
    Phone,
    Heart,
    SocialLink,
    Search,
    SearchForm
  },
  setup () {
    /**
     *  Control modal status,
     *  v-model bind on '.check' checkbox
     */
    const onModalOpen = ref(false)

    /** Sticky header */
    const navEl = ref<HTMLInputElement>()
    function stickyHeader () {
      if (navEl.value) {
        if (window.pageYOffset > navEl.value.offsetTop) {
          navEl.value.classList.add('sticky')
        } else {
          navEl.value.classList.remove('sticky')
        }
      }
    }

    /** Collection meal  */
    const onCollection = ref(false)
    function heartClick (toggle: boolean) {
      onCollection.value = toggle
    }

    /** Search form control */
    const onSearchFormOpen = ref(false)
    function searchFormActive () {
      onSearchFormOpen.value = true
      onModalOpen.value = true
    }

    function submit () {
      console.log('submit')
    }

    onMounted(() => document.addEventListener('scroll', () => stickyHeader(), true))

    onBeforeUnmount(() =>
      document.removeEventListener('scroll', () => stickyHeader(), true)
    )

    watchEffect(() => {
      if (!onModalOpen.value) {
        onSearchFormOpen.value = false
      }
    })

    return {
      navEl,
      onModalOpen,
      heartClick,
      onCollection,
      searchFormActive,
      onSearchFormOpen,
      submit
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
    max-width: $container-MAX-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  }
}

.headerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__phone {
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      width: 30px;
      fill: $color-primary;
    }

    &--desc {
      margin-left: 3px;
      text-decoration: none;
      font-size: 1.3rem;
      color: $color-gray-dark-1;
    }
  }

  &__address {
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      fill: $color-primary;
    }

    &--desc {
      margin-left: 5px;
      text-decoration: none;
      font-size: 1.3rem;
      color: $color-gray-dark-1;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    margin-top: 2px;
  }
}

.headerBottom {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    justify-content: center;
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
      color: rgb(236, 190, 35);
    }

    &.router-link-exact-active {
      color: rgb(211, 185, 98);
    }
  }

  &__search {
    display: flex;
  }

  &__last {
    display: flex;
  }

  &__last--find {
    display: flex;
  }
}

.hamburger {
  position: absolute;
  top: 10px;
  right: 3%;
  z-index: 51;

  &__menu {
    width: 34px;
    height: 34px;
    position: relative;
    display: none;
  }

  &__menu.active {
    display: block;
  }

  .menuicon-top,
  .menuicon-bottom {
    width: 17px;
    height: 2px;
    position: absolute;
    background: $color-black;
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

.check {
  position: absolute;
  top: 10px;
  right: 3%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  // z-index: 12;
  z-index: 52;
  opacity: 0;
  display: none;
}

.check.active {
  display: block;
}

.check:checked ~ .hamburger .menuicon-top {
  transform: rotate(-45deg) translate(-50%, 0);
  background: $color-white;
}

.check:checked ~ .hamburger .menuicon-bottom {
  transform: rotate(45deg) translate(-50%, 0);
  background: $color-white;
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
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.lang {
  display: flex;
  list-style-type: none;

  &-box {
    padding: 5px 10px 7px 10px;
    margin: 0 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    background: rgba(213, 213, 228, 0.541);
    border-radius: 50%;
    transition: 0.2s ease;

    &:hover {
      background: rgb(118, 118, 192);
      color: $color-primary;
    }
  }
}

.socialLink {
  margin-right: 2rem;
}

.search-icon {
  position: relative;
  top: 3px;
  right: 1rem;
  cursor: pointer;

  &:hover {
    fill: $color-primary;
  }
}

.collection {
  padding: 2px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    color: $color-gray-light-1;
    width: 5px;
    height: 16px;
    border-left: 1px solid $color-gray-light-2;
    position: absolute;
    top: 50%;
    left: -8px;
    margin-top: -11px;
  }

  &__list {
    display: none;
  }

  &__list.active {
    display: initial;
    position: absolute;
    bottom: -240px;
    right: 0;
    width: 100%;
    min-width: 300px;
    height: 240px;
    background: #ccc;
    z-index: 6;
    padding: 1rem 2rem;
    cursor: initial;
    box-shadow: 0px 0px 20px rgba($color-black, 0.2);

    &::before {
      content: '';
      background: #ccc;
      width: 8px;
      height: 8px;
      position: absolute;
      z-index: 6;
      top: -3.5px;
      right: 10px;
      transform: rotate(45deg);
      border-radius: 1px;
    }
  }
}

@media (max-width: 1024px) {
  .headerTop__address--desc,
  .headerTop__phone--desc {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .header {
    margin-bottom: 3rem;
  }

  .check,
  .hamburger__menu {
    display: block;
  }

  .headerTop__lang {
    display: none;
  }

  .headerTop {
    flex-direction: column;

    &__logo {
      order: -1;
    }

    &__address,
    &__phone {
      margin: 5px 0;
    }
  }

  .headerBottom {
    flex-direction: column;

    &__nav {
      padding: 0.5rem 0;
    }

    &__nav--link {
      padding: 0 8px;
    }

    &__last {
      width: 100%;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }

  .lang {
    display: none;
  }
}
</style>

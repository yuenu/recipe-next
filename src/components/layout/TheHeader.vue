<template>
  <header class="header">
    <input
      type="checkbox"
      id="check"
      v-model="onModalOpen"
      :class="['check', 'u-close-position', { active: onModalOpen }]"
    />
    <div class="header__container">
      <HeaderTop />
      <div class="headerBottom">
        <LanguageSwitch />
        <ul class="headerBottom__nav" ref="navEl">
          <li>
            <router-link to="/" class="headerBottom__nav--link">
              {{ t('navigation.home') }}
            </router-link>
          </li>
          <li>
            <router-link to="/search" class="headerBottom__nav--link">
              {{ t('navigation.meals') }}
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="headerBottom__nav--link">
              {{ t('navigation.about') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/editProfile"
              class="headerBottom__nav--link login"
            >
              {{ t('navigation.settings') }}
            </router-link>
          </li>
          <li>
            <a
              href="https://profile-d6420.firebaseapp.com/"
              class="headerBottom__nav--link"
              target="_blank"
            >
              {{ t('navigation.projects') }}
            </a>
          </li>
        </ul>
        <div class="headerBottom__last">
          <SocialLink class="headerBottom__social" />
          <div class="headerBottom__last--find">
            <Search class="search-icon" @click="searchFormActive" />
            <Collection />
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
        class="navigation__modal"
      >
        <ul class="navigation__nav">
          <li class="navigation__item">
            <router-link to="/" class="navigation__link">
              <span>01</span>{{ t('navigation.home') }}
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/search" class="navigation__link">
              <span>02</span>{{ t('navigation.meals') }}
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/about" class="navigation__link">
              <span>03</span>{{ t('navigation.about') }}
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/editProfile" class="navigation__link">
              <span>04</span>{{ t('navigation.settings') }}
            </router-link>
          </li>
          <li class="navigation__item">
            <a
              href="https://profile-d6420.firebaseapp.com/"
              class="navigation__link"
              target="_blank"
            >
              <span>05</span>{{ t('navigation.projects') }}
            </a>
          </li>
        </ul>

        <LanguageSwitch mode="mobile" />
      </BaseModal>
    </transition>

    <transition name="fade" mode="out-in">
      <BaseModal
        :onModalOpen="onSearchFormOpen && onModalOpen"
        @click.self="onModalOpen = false"
      >
        <div class="search-box">
          <SearchForm
            :searchActive="onModalOpen"
            @searchSubmit="onModalOpen = false"
          />
        </div>
      </BaseModal>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue'

// Icon
import Search from '@/components/UI/Icon/Search.vue'

import SocialLink from '@/components/layout/SocialLink.vue'
import SearchForm from '@/components/layout/SearchForm.vue'
// Component
import Collection from '@/components/header/Collection.vue'
import HeaderTop from '@/components/header/HeaderTop.vue'
import LanguageSwitch from '@/components/layout/LanguageSwitch.vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    SocialLink,
    Search,
    SearchForm,
    Collection,
    HeaderTop,
    LanguageSwitch
  },
  setup () {
    const { t } = useI18n()

    /**
     *  Control modal status,
     *  v-model bind on '.check' checkbox
     */
    const onModalOpen = ref(false)

    /** Sticky header */
    const navEl = ref<HTMLInputElement>()
    function toggleHeaderSticky () {
      if (navEl.value) {
        if (window.pageYOffset > 80) {
          navEl.value.classList.add('sticky')
        } else {
          navEl.value.classList.remove('sticky')
        }
      }
    }

    /** Collection meal  */
    const collectionIsOpen = ref(false)
    function onHeartClick (toggle: boolean) {
      collectionIsOpen.value = toggle
    }

    /** Search form control */
    const onSearchFormOpen = ref(false)
    function searchFormActive () {
      onSearchFormOpen.value = true
      onModalOpen.value = true
    }

    const rafTimer = ref(0)
    onMounted(() =>
      document.addEventListener(
        'scroll',
        function () {
          cancelAnimationFrame(rafTimer.value)
          rafTimer.value = requestAnimationFrame(toggleHeaderSticky)
        },
        true
      )
    )

    watchEffect(() => {
      if (!onModalOpen.value) {
        onSearchFormOpen.value = false
      }
    })

    return {
      navEl,
      onModalOpen,
      onHeartClick,
      collectionIsOpen,
      searchFormActive,
      onSearchFormOpen,
      t
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
    max-width: $container-max-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  }
}

.headerBottom {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__social {
    margin-right: 1.3rem;
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
    position: sticky;
  }

  &__nav--link {
    font-size: 14px;
    padding: 0 12px;
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: all 140ms ease;

    &:hover {
      color: hsl(46, 84%, 66%);
    }

    &.router-link-exact-active {
      color: hsl(46, 84%, 53%);
    }
  }

  &__search {
    display: flex;
  }

  &__last {
    display: flex;
    align-items: center;
  }

  &__last--find {
    display: flex;
    margin-bottom: -5px;
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

.navigation {
  &__nav {
    list-style-type: none;
    text-align: center;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 250%;
      transition: all 0.4s;
    }

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(0.5rem);
    }
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

.search-icon {
  position: relative;
  top: 3px;
  right: 1rem;
  cursor: pointer;

  &:hover {
    fill: $color-primary;
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

  .headerBottom {
    flex-direction: column;

    &__social {
      justify-content: flex-start;
    }

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

@media (max-width: 600px) {
  .navigation {
    &__link {
      &:link,
      &:visited {
        font-size: 2.5rem;
        padding: 0.5rem 1rem;
      }
    }
  }
}
</style>

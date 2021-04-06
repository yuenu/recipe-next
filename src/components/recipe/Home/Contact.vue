<template>
  <div class="contact">
    <div class="signUp">
      <div class="container">
        <div class="content">
          <div class="content__heading u-margin-bottom-small">
            SIGN UP FOR OUR UPDATE
          </div>
          <hr class="divide" />
          <div class="content__info">
            To stay up-to-date on our promotions, discounts, sales, special
            offers and more.
          </div>
        </div>
        <div class="email">
          <input
            type="email"
            class="email__tern"
            placeholder="your@gmail.com"
          />
          <div class="email__submit">
            <Email />
          </div>
        </div>
        <SocialLink />
      </div>
    </div>
    <div class="contactUs">
      <div class="container">
        <div class="content">
          <div class="content__heading u-margin-bottom-small">
            CONTACT US
          </div>
          <hr class="divide" />
          <div class="content__info">
            <div class="info-box">
              <Location class="info-box--icon" />
              <span
                class="info-box--desc"
              >No.99, Sec. 3, Taiwan Blvd., Xitun Dist., Taichung City 407610,
                Taiwan (R.O.C.)</span>
            </div>
            <div class="info-box">
              <Phone class="info-box--icon" />
              <a
                href="tel: 0988-XXX-XXX"
                class="info-box--desc"
              >0988-XXX-XXX</a>
            </div>
            <div class="info-box">
              <Clock class="info-box--icon" />
              <span class="info-box--desc">
                Monday-Friday: 9:00 am - 6:00 pm
                <br />
                Saturday: 9:00 am - 4:00 pm
              </span>
            </div>
            <div class="info-box">
              <Email class="info-box--icon" />
              <a
                class="info-box--desc"
                href="mailto: miraiku82@gamil.com"
              >Send Us Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="instagram">
      <div class="container">
        <div class="content">
          <div class="content__heading u-margin-bottom-small">
            INSTAGRAM
          </div>
          <hr class="divide" />
          <div class="content__info ins">
            <div
              class="ins-box"
              v-for="ins in instagram"
              :key="ins.idCategory"
              :title="ins.strCategoryDescription"
            >
              <img
                :src="ins.strCategoryThumb"
                :alt="ins.strCategory"
                @click="searchIns(ins.strCategory)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import Email from '@/components/UI/Icon/Email.vue'
import Clock from '@/components/UI/Icon/Clock.vue'
import Phone from '@/components/UI/Icon/Phone.vue'
import Location from '@/components/UI/Icon/Location.vue'

import SocialLink from '@/components/layout/SocialLink.vue'

import { useRouter } from 'vue-router'

import recipeStore from '@/store/index'

export default defineComponent({
  name: 'contact',
  components: {
    Email,
    Clock,
    Phone,
    Location,
    SocialLink
  },
  setup () {
    const store = inject('store', recipeStore)
    const router = useRouter()

    const instagram = computed(() => {
      return store.getters.getCategory.filter(cat => {
        return +cat.idCategory <= 8
      })
    })

    function searchIns (category: string) {
      store.GET_MEALS_BY_CATEGORY(category)
      router.push({ name: 'searchResult' })
    }

    return { instagram, searchIns }
  }
})
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  margin: 1rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  min-height: 250px;
}

.container {
  padding: 10px;
}

.content {
  margin-bottom: 24px;

  &__heading {
    font-size: 1.8rem;
    margin-left: 5px;
  }
}

.divide {
  margin: 5px 0;
}

.content__info {
  font-size: 1rem;
  letter-spacing: 0.8px;
  font-weight: lighter;
  line-height: 1.7;
}

.info-box {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1rem;

  &--icon {
    fill: $color-primary;
    margin-left: 0.6rem;
    min-width: 24px;
  }

  &--desc {
    margin-left: 1.4rem;
    text-decoration: none;
    color: #333;
  }

  &:nth-child(2) &--desc {
    font-weight: bold;
    font-size: 1.5rem;
  }

  &:nth-child(2) &--desc:hover,
  &:nth-child(4) &--desc:hover {
    color: $color-primary;
  }
}

.email {
  max-width: 300px;
  position: relative;

  &__tern {
    display: block;
    padding: 12px 0 12px 20px;
    font-size: 12px;
    outline: none;
    width: 100%;
    border: 1px solid $color-gray-light-1;
    border-radius: 23px;

    &:focus {
      box-shadow: 0px 0px 10px $color-gray-light-1;
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
      fill: #c2ab45;
    }
  }
}

.ins {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  img {
    width: 100%;
    margin: 10px 8px;
    cursor: pointer;
  }
}
</style>
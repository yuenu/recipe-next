<template>
  <div class="social">
    <a
      target="_blank"
      rel="noopener noregerrer"
      href="https://www.facebook.com/"
      class="social__link"
    >
      <FacebookIcon class="social__link--icon" />
    </a>
    <a
      target="_blank"
      rel="noopener noregerrer"
      href="https://twitter.com/?lang=zh-tw"
      class="social__link"
    >
      <TwitterIcon class="social__link--icon" />
    </a>
    <a
      target="_blank"
      rel="noopener noregerrer"
      href="https://www.instagram.com/"
      class="social__link"
    >
      <InstagramIcon class="social__link--icon" />
    </a>
  </div>
</template>

<script lang="ts">
import FacebookIcon from '@/components/UI/Icon/Facebook.vue'
import TwitterIcon from '@/components/UI/Icon/Twitter.vue'
import InstagramIcon from '@/components/UI/Icon/Instagram.vue'

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon
  }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;

  &__link {
    text-decoration: underline;
    display:inline-block;
    width:2.5rem;
    height:2.5rem;

    border-radius:50%;
    -webkit-box-pack: center;
    -webkit-box-align:center;
    justify-content:center;
    display:flex;
    margin-right:5px;
    position:relative;

    transition:0.5 all;
    opacity:0.4;

    &:hover {
      opacity:1;
      background: $color-primary;
    }
  }

  &__link:hover &__link--icon {
    fill: rgba($color-white, 1);
  }

  &__link--icon {
    width: 18px;
    fill: $color-gray-dark-1;
    position: relative;
    top:7px;
  }

}
</style>

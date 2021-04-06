<template>
  <div class="social-link">
    <Facebook class="social-link--icon" />
    <Twitter class="social-link--icon" />
    <Instagram class="social-link--icon" />
  </div>
</template>

<script lang="ts">
import Facebook from '@/components/UI/Icon/Facebook.vue'
import Twitter from '@/components/UI/Icon/Twitter.vue'
import Instagram from '@/components/UI/Icon/Instagram.vue'

export default {
  components: {
    Facebook,
    Twitter,
    Instagram
  }
}
</script>

<style lang="scss" scoped>
.social-link {
  margin: 2rem 0;

  &--icon {
    font-size:1.2rem;
    fill: $color-gray-dark-1;
  }

  &--icon:hover {
    fill: $color-primary;
    cursor: pointer;
  }

  &--icon:not(:first-child) {
    margin-left: 1rem;
  }
}
</style>

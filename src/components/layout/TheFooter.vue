<template>
  <footer class="footer">
    <div class="footer__copyright">
      © 2021 All Rights Reserved. - Created by <span class="author">yuenu</span>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 32px;
  background: rgb(13, 14, 35);
  color: $color-white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  &__copyright {
    font-size: 14px;
  }
}

.author {
  color: $color-primary;
}
</style>

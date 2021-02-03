<template>
  <div class="footer">
    <div class="copyright">
      © 2021 All Rights Reserved. - Created by yuenu
    </div>
  </div>
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
  color: var(--text-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  .copyright {
    font-size: 14px;
  }
}
</style>

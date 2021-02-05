<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <div class="banner"></div>
        <div class="card"></div>
      </div>
      <div class="sidebar">
        <div class="sidebar__box"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;

  .container {
    display:flex;
    width:100%;
    min-height:100vh;
    max-width: 1024px;

  }
}

.main{
  width:100%;
  background:rgba(126, 47, 47, 0.171);
}
.sidebar{
  min-width:300px;
  background:rgba(18, 244, 244, 0.219);
  display:flex;
  justify-content: center;

  &__box {
    width:250px;
    height:500px;
    background:linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.547));
    box-shadow: 1px 5px 5px rgb(117, 117, 117);
    border-radius:16px;
    margin-top:10vh;
  }
}
</style>

<template>
  <div class="search">
    <form @submit.prevent="submitForm">
      <input
        class="search__tern"
        type="text"
        placeholder="Search"
        v-model.trim="searchInput"
      />
      <span class="search__icon"></span>
      <div
        class="search__clear"
        @click="clearInput"
      ></div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const searchInput = ref('')
    // Methods
    const submitForm = () => { console.log('submit search:', searchInput.value) }
    const clearInput = () => { searchInput.value = '' }

    return {
      searchInput,
      submitForm,
      clearInput
    }
  }

})
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  min-width: 125px;
  width: 185px;
  position: relative;

  &__tern {
    width: 100%;
    padding: 0.2rem 0.5rem 0.1rem 1.7rem;
  }

  &__icon {
    background: url('../../assets/icon/search.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 9px;
    top: 7.5px;
  }

  &__clear {
    background: url('../../assets/icon/clear.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 6px;
    right: 8px;
  }
}
</style>

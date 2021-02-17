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
      <div class="search__clear" @click="clearInput"></div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const searchInput = ref('')
    const store = useStore()

    // Methods
    const submitForm = () => {
      store.dispatch('SEARCH_MEALS', searchInput.value)
      searchInput.value = ''
    }

    const clearInput = () => {
      console.log(clearInput)
      searchInput.value = ''
    }

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
  max-width: 200px;
  width: 100%;
  width: 185px;
  position: relative;

  &__tern {
    padding: 0.2rem 0 0.1rem 4.4rem;
    max-width: 180px;
  }

  &__icon {
    background: url('../../assets/icon/search.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 55px;
    top: 6.5px;
  }

  &__clear {
    display: none;
  }

  &__tern:focus {
    width: 100%;
    padding: 0.2rem 0 0.1rem 1.7rem;
  }

  &__tern:focus ~ &__icon {
    left: 9px;
  }

  &__tern:focus ~ &__clear {
    background: url('../../assets/icon/clear.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 6px;
    right: 12px;
    display: block;
  }
}
</style>

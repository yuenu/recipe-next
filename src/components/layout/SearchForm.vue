<template>
  <div class="search">
    <form @submit.prevent="submitForm" class="search__form">
      <input
        :class="['search__tern', { active: inputActive }]"
        type="text"
        placeholder="Search"
        v-model.trim="searchInput"
        autocapitalize="none"
      />
      <span :class="['search__icon', { active: inputActive }]"></span>
      <div
        :class="['search__clear', { active: inputActive }]"
        @click="clearInput"
      ></div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import recipeStore from '@/store/recipe'

export default defineComponent({
  setup () {
    const searchInput = ref('')

    const submitForm = () => {
      recipeStore.SEARCH_MEALS(searchInput.value)
      searchInput.value = ''
    }

    const clearInput = () => {
      searchInput.value = ''
    }

    /**
     * EventListener the clicked where input section or others section
     *
     */
    const inputActive = ref(false)
    window.addEventListener('click', (event: MouseEvent) => {
      const inputTarget = event.target as HTMLElement
      if (
        inputTarget.classList.contains('search__tern') ||
        inputTarget.classList.contains('search__icon')
      ) {
        inputActive.value = true
      } else {
        searchInput.value = ''
        inputActive.value = false
      }
    })

    return {
      searchInput,
      submitForm,
      clearInput,
      inputActive
    }
  }
})
</script>

<style lang="scss" scoped>
.search {
  &__form {
    display: flex;
    max-width: 200px;
    width: 185px;
    position: relative;
    height: 28px;
    margin: 0 auto;
  }

  &__tern {
    padding: 0.2rem 0 0.1rem 4.4rem;
    max-width: 180px;
    height: 100%;
  }

  &__icon {
    background: url('../../assets/icon/search.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 55px;
    top: 8px;
  }

  &__icon.active {
    left: 9px;
  }

  &__tern.active {
    width: 100%;
    padding: 0.2rem 1rem 0.1rem 1.7rem;
  }

  &__clear {
    opacity: 0;
  }

  &__clear.active {
    background: url('../../assets/icon/clear.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 8px;
    right: 12px;
    display: block;
    z-index: 1;
    cursor: pointer;
    opacity: 1;
  }
}

@media (max-width: 476px) {
  .search {
    display: none;
  }
}
</style>

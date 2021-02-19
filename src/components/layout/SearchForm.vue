<template>
  <div class="search">
    <form @submit.prevent="submitForm">
      <input
        :class="['search__tern', { active: inputActive }]"
        type="text"
        placeholder="Search"
        v-model.trim="searchInput"
        autocapitalize="none"
      />
      <span :class="['search__icon', { active: inputActive }]"></span>
      <div :class="['search__clear', { active: inputActive }]" @click="clearInput"></div>
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
    const submitForm = () => {
      store.dispatch('SEARCH_MEALS', searchInput.value)
      searchInput.value = ''
    }

    const inputActive = ref(false)
    window.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.classList[0] === 'search__tern' || target.classList[0] === 'search__icon') {
        inputActive.value = true
      } else {
        searchInput.value = ''
        inputActive.value = false
      }
    })

    const clearInput = () => {
      searchInput.value = ''
    }

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
  display: flex;
  max-width: 200px;
  width: 100%;
  width: 185px;
  position: relative;
  height:28px;

  &__tern {
    padding: 0.2rem 0 0.1rem 4.4rem;
    max-width: 180px;
    height:100%;
    z-index:2;
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
    opacity:0;
  }

  // &__tern:focus {
  //   width: 100%;
  //   padding: 0.2rem 1rem 0.1rem 1.7rem;
  // }

  // &__tern:focus ~ &__icon {
  //   left: 9px;
  // }

  // &__tern:focus ~ &__clear {
  //   background: url('../../assets/icon/clear.png') no-repeat center / cover;
  //   width: 12px;
  //   height: 12px;
  //   position: absolute;
  //   top: 8px;
  //   right: 12px;
  //   display: block;
  //   z-index:1;
  //   cursor:pointer;
  //   opacity:1;
  // }

  &__clear.active {
    background: url('../../assets/icon/clear.png') no-repeat center / cover;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 8px;
    right: 12px;
    display: block;
    z-index:1;
    cursor:pointer;
    opacity:1;
  }
}
</style>

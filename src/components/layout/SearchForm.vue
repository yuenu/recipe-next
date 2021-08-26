<template>
  <div class="search">
    <form @submit.prevent="submitForm" class="search__form">
      <div class="search__group">
        <input
          :class="['search__tern', { square: inputActive }]"
          type="text"
          :placeholder="t('search')"
          v-model.trim="searchInput"
          autocapitalize="off"
        />
        <button
          :class="['search__icon', { close: inputActive }]"
          type="reset"
          @click="formToggle"
        ></button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    searchActive: {
      type: Boolean,
      required: true
    }
  },
  emits: ['searchSubmit'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const router = useRouter()

    const searchInput = ref('')

    function submitForm () {
      emit('searchSubmit')

      router.push({ name: 'searchResult', query: { q: searchInput.value } })
      searchInput.value = ''
    }

    const inputActive = ref(false)
    function formToggle () {
      inputActive.value = !inputActive.value

      if (inputActive.value) {
        searchInput.value = ''
      }
    }

    onMounted(() => {
      setTimeout(() => {
        inputActive.value = props.searchActive
      }, 300)
    })
    return {
      t,
      searchInput,
      submitForm,
      inputActive,
      formToggle
    }
  }
})
</script>

<style lang="scss" scoped>
.search {
  &__form {
    height: 50px;
    width: 300px;
    position: relative;
  }

  &__group {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__tern {
    width: 50px;
    height: 50px;
    border: 4px solid $color-white;
    border-radius: 50%;
    background: transparent;
    color: $color-white;
    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
      padding 0.2s;
    transition-delay: 0.4s;
    transform: translate(0, -50%);
  }

  &__tern.square {
    padding: 0 40px 0 10px;
    width: 300px;
    height: 50px;
    border: 4px solid $color-white;
    border-radius: 0;
    color: $color-white;
    font-size: 1rem;
    font-weight: 400;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
      padding 0.2s;
    transition-delay: 0.4s, 0s, 0.4s;
    transform: translate(0, -50%);
  }

  &__icon {
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    outline: none;
    border: none;
    color: $color-white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: translate(0, -50%);
  }

  &__icon:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: $color-white;
    transform: rotate(45deg);
    margin-top: 26px;
    margin-left: 17px;
    transition: 0.2s ease-in-out;
  }

  &__icon.close {
    transition: 0.4s ease-in-out;
    transition-delay: 0.4s;
  }

  &__icon.close:before {
    content: '';
    position: absolute;
    width: 27px;
    height: 4px;
    margin-top: -1px;
    margin-left: -13px;
    background-color: $color-white;
    transform: rotate(45deg);
    transition: 0.2s ease-in-out;
  }

  &__icon.close:after {
    content: '';
    position: absolute;
    width: 27px;
    height: 4px;
    background-color: $color-white;
    margin-top: -1px;
    margin-left: -13px;
    cursor: pointer;
    transform: rotate(-45deg);
  }
}

@media (max-width: 476px) {
  .search {
    &__form {
      width: 270px;
    }

    &__tern.square {
      width: 270px;
    }
  }
}
</style>

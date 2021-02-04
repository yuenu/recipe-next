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

<script>
export default {
  data () {
    return {
      searchInput: '',
      hasInput: false
    }
  },
  methods: {
    submitForm () {
      console.log('sumbit search')
    },
    clearInput () {
      this.searchInput = ''
    }
  },
  watch: {
    searchInput (val) {
      if (!val) this.hasInput = true
      else this.hasInput = false
    }
  },
  computed: {
    getHasInput () {
      return this.hasInput
    }
  }
}
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
    top: 7px;
    right: 8px;
  }
}
</style>

<template>
  <div class="pagination">
    <div
      :class="['pagination__link', 'prev', { disabled: !hasPrev }]"
      href="#"
      @click="prevPage"
    >
      &lt;
    </div>
    <a
      :class="['pagination__link', { current: page === currentPage }]"
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
    >
      {{ page }}
    </a>
    <div
      :class="['pagination__link', 'next', { disabled: !hasNext }]"
      href="#"
      @click="nextPage"
    >
      &gt;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, watch, PropType } from 'vue'
import type { CategoryMeals } from '@/apis/response.type'

export default defineComponent({
  name: 'Pagination',
  props: {
    getMeals: {
      required: false,
      type: Array as PropType<CategoryMeals[]>
    }
  },
  emits: ['changePage'],
  setup (prop, { emit }) {
    const hasPrev = ref(false)
    const hasNext = ref(true)
    const currentPage = ref(1)

    const pages = computed(() => {
      return prop.getMeals ? Math.ceil(prop.getMeals.length / 6) : 0
    })

    const getMeals = computed(() => prop.getMeals)

    function changePage (page: number) {
      currentPage.value = page
      emit('changePage', page)
    }

    function prevPage () {
      currentPage.value--
      changePage(currentPage.value)
    }

    function nextPage () {
      currentPage.value++
      changePage(currentPage.value)
    }

    watch(currentPage, val => {
      hasPrev.value = val > 1
      hasNext.value = val < pages.value && pages.value !== 1
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(getMeals, (_value, _oldValue) => {
      currentPage.value = 1
      hasNext.value = true

      if (pages.value === 1) {
        hasPrev.value = false
        hasNext.value = false
      }
    })

    onMounted(() => {
      hasNext.value = pages.value !== 1
      // Initial meal list, if no data then pagination disable
      if (getMeals.value && getMeals.value.length === 0) {
        hasPrev.value = false
        hasNext.value = false
      }
    })

    return {
      pages,
      hasPrev,
      hasNext,
      currentPage,
      changePage,
      prevPage,
      nextPage
    }
  }
})
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-block;
  margin: 20px 0 20px 40px;

  &__link {
    color: black;
    float: left;
    padding: 8px 16px;
    margin: 0 4px 0 0;
    text-decoration: none;
    border: 1px solid #ddd;
    cursor: pointer;

    &:hover,
    &.current {
      background: #ffc139;
      color: #000;
    }

    &.current {
      color: $color-white;
    }
  }
}

.pagination__link.disabled {
  pointer-events: none;
  background: $color-white;
  color: #ddd;
}

@media (max-width: 476px) {
  .pagination {
    margin: 20px 0 0 0;

    &__link {
      &:hover {
        background: transparent;
        color: #000;
      }
    }
  }
}
</style>

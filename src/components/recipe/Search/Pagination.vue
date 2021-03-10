<template>
  <div class="pagination" v-if="!!getMeals.length">
    <div
      :class="['pagination__link' ,'prev', { disabled: !hasPrev}]"
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
      required: true,
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
    const changePage = (page: number) => {
      currentPage.value = page
      emit('changePage', page)
    }

    const prevPage = () => {
      currentPage.value--
      changePage(currentPage.value)
    }

    const nextPage = () => {
      currentPage.value++
      changePage(currentPage.value)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(currentPage, (val, _oldVal) => {
      hasPrev.value = val > 1
      hasNext.value = (val < pages.value) && (pages.value !== 1)
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(getMeals, (_value, _oldValue) => {
      currentPage.value = 1

      if (pages.value === 1) {
        hasPrev.value = false
        hasNext.value = false
      }
    })

    onMounted(() => {
      hasNext.value = pages.value !== 1
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
  margin: 20px 0 0 60px;

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
      color:#fff;
    }
  }
}

.pagination__link.disabled {
  pointer-events: none;
  background:#fff;
  color:#ddd;
}
</style>

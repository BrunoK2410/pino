<template>
  <template v-if="totalPages !== 1">
    <nav class="mt-5" style="filter: brightness(120%)">
      <ul class="pagination pagination-lg justify-content-center flex-wrap">
        <li
          v-for="page in visiblePageNumbers"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
        >
          <a
            v-if="page !== '...'"
            class="page-link text-purple"
            @click="$emit('active-page', page)"
            >{{ page }}</a
          >
          <span v-else class="page-link">...</span>
        </li>
      </ul>
    </nav></template
  >
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const visiblePageNumbers = computed(() => {
  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, props.currentPage - halfMaxVisiblePages);
  let endPage = Math.min(startPage + maxVisiblePages - 1, props.totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < props.totalPages) {
    if (endPage < props.totalPages - 1) {
      pages.push("...");
    }
    pages.push(props.totalPages);
  }

  return pages;
});
</script>

<style setup>
.page-link {
  color: var(--red-color) !important;
}

.active > .page-link {
  color: #ffffff !important;
  background-color: var(--red-color) !important;
  border-color: var(--red-color) !important;
}
</style>

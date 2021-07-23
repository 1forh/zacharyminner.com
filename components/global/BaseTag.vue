<template>
  <div class="px-2 py-1 text-sm font-semibold rounded-sm text-12" :class="[bgColorClass, textColorClass]">
    {{ tag }}
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
    },
  },
  computed: {
    bgColorClass() {
      return 'bg-primary-200';
    },
    textColorClass() {
      return 'text-primary-800';
    }
  },
};
</script>

<style lang="postcss" scoped></style>

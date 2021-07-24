<template>
  <div class="grid" :class="[columnClass, gapClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseGrid',
  props: {
    columnClass: {
      type: String,
      default: 'grid-cols-2',
    },
    gapClass: {
      type: String,
      default: 'gap-1',
    },
  },
};
</script>

<template>
  <button type="button" class="flex appearance-none group" @click="onFilter">
    <base-tag v-if="tag" :tag="tag" :count="count" :rotation="rotation" class="w-full" :active="active" />
  </button>
</template>

<script>
export default {
  name: 'ContentFilter',
  props: {
    count: {
      type: Number,
    },
    tag: {
      type: String,
    },
    rotation: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    onFilter() {
      this.$emit('filter', this.tag);
    },
  },
};
</script>

<style lang="scss" scoped></style>

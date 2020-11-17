<template>
  <nuxt-link :to="item.path" class="space-y-2">
    <div>
      <h3 class="text-20 font-semibold">{{ item.title }}</h3>
      <p v-if="formattedDate" class="text-gray-500">{{ formattedDate }}</p>
    </div>
    <p>{{ item.summary }}</p>
    <div v-if="item.tags" class="flex space-x-3">
      <div v-for="(tag, index) in item.tags" :key="index" class="bg-primary-200 text-primary-800 rounded-sm px-2 py-1 text-12 font-semibold">{{ tag }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import get from 'lodash/get';
import format from 'date-fns/format';

export default {
  name: 'ContentItemPreview',
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    formattedDate() {
      const date = get(this.item, 'date');
      if (!date) return;
      return format(new Date(date), 'MMMM d, YYY');
    },
  },
};
</script>

<style lang="scss" scoped></style>

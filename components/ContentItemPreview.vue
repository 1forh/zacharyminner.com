<template>
  <nuxt-link :to="item.path" class="px-5 py-8 relative block">
    <div class="absolute w-full h-full inset-0 bg-gray-50 rounded-sm shadow-md transform-gpu" :class="[rotation]" />
    <div class="relative z-10">
      <div :class="{ 'mb-3': item.summary || item.tags }">
        <p v-if="formattedDate" class="text-gray-500 text-sm">{{ formattedDate }}</p>
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      </div>
      <p class="text-sm text-gray-600 mb-5" v-if="item.summary">{{ item.summary }}</p>
      <div v-if="item.tags" class="flex space-x-3">
        <base-tag v-for="(tag, index) in item.tags" :key="index">
          {{ tag }}
        </base-tag>
      </div>
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
    rotation: {
      type: String,
      default: 'rotate-2',
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

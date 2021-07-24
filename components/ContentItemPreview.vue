<template>
  <nuxt-link :to="item.path" class="relative block px-5 py-8 group">
    <div class="absolute inset-0 w-full h-full transition-transform rounded-sm shadow-md bg-gray-50 transform-gpu" :class="[rotation, groupHoverRotation]" />
    <div class="relative z-10">
      <div :class="{ 'mb-2': item.summary || item.tags }">
        <p v-if="formattedDate" class="text-sm text-gray-500">{{ formattedDate }}</p>
        <h3 class="text-lg font-semibold leading-snug">{{ item.title }}</h3>
      </div>
      <p class="mb-5 text-sm text-gray-600" v-if="item.summary">{{ item.summary }}</p>
      <div v-if="item.tags" class="flex space-x-3">
        <base-tag v-for="(tag, index) in item.tags" :key="index" :tag="tag" :rotation="oppositeRotation" />
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
    oppositeRotation() {
      if (this.rotation.startsWith('-')) {
        const split = this.rotation.split('-');
        split.slice();
        return split.join('-');
      } else {
        return `-${this.rotation}`;
      }
    },
    formattedDate() {
      const date = get(this.item, 'date');
      if (!date) return;
      return format(new Date(date), 'MMMM d, YYY');
    },
    groupHoverRotation() {
      const isNegativeRotation = this.rotation.split('-')[0] === '';
      if (isNegativeRotation) {
        return `group-hover:rotate-1`;
      } else {
        return `group-hover:-rotate-1`;
      }
    },
  },
};
</script>

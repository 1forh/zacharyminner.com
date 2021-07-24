<template>
  <div class="relative rounded-sm text-12 text-gray-50 base-tag" :class="{ active }">
    <div
      :style="[{ 'background-color': color }]"
      class="absolute inset-0 w-full h-full transition-all rounded-sm transform-gpu base-tag-bg"
      :class="[rotation, groupHoverRotation, active ? 'ring-2 ring-gray-900' : '']"
    />
    <div class="relative z-10 flex px-3 py-2 text-xs font-semibold whitespace-nowrap">
      <template v-if="count"> ({{ count }}) </template><span>{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
    },
    tag: {
      type: String,
    },
    rotation: {
      type: String,
      default: 'rotate-2',
    },
    active: {
      type: Boolean,
    },
  },
  computed: {
    color() {
      const str = typeof this.tag === 'string' ? this.tag.toLowerCase() : null;
      const color = this.stringToHslColor(str, 50, 50);
      return color;
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
  methods: {
    stringToHslColor(str, s, l) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var h = hash % 360;
      return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    },
  },
};
</script>

<style lang="postcss">
.tags-are-active .base-tag:not(.active) .base-tag-bg {
  @apply opacity-50;
}

.base-tag-bg {
  outline: 1px solid transparent;
  -webkit-backface-visibility: hidden;
  will-change: transform;
  -webkit-perspective: 1000;
}
</style>

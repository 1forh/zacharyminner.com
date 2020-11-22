<template>
  <img :src="src" :alt="alt" :style="{ 'max-width': maxWidth }" class="w-full" />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
    maxWidth: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<template>
  <pre :clas="[languageClass]"><code><slot /></code></pre>
</template>

<script>
export default {
  name: 'BaseCode',
  props: {
    lang: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.lang}`;
    },
  },
};
</script>

<style lang="postcss" scoped></style>

<template>
  <footer class="app-footer py-3 text-center">
    &copy; {{ currentYear }}. Built with
    <a
      href="https://nuxtjs.org/"
      target="_blank"
      class="text-light"
    >Nuxt.js</a> and
    <a href="https://bootstrap-vue.js.org" target="_blank" class="text-light">Bootstrap Vue</a>.
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
.app-footer {
}
</style>

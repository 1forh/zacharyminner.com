<template>
  <footer class="app-footer py-3 text-center">
    &copy; {{ currentYear }}. Built with
    <a href="https://nuxtjs.org/" target="_blank" class="text-white">Nuxt.js</a> and
    <a href="https://bootstrap-vue.js.org" target="_blank" class="text-white">Bootstrap Vue</a>.
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
  border-top: 5px solid $primary;
}
</style>

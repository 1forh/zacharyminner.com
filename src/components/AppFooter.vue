<template>
  <footer class="app-footer py-3 text-center">
    &copy; {{ currentYear }}. Built with
    <a
      href="https://vuejs.org"
      target="_blank"
      class="text-white"
    >Vue.js</a> and
    <a href="https://firebase.google.com/products" target="_blank" class="text-white">Firebase</a>.
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

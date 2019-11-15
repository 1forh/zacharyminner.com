<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppNavbar, AppFooter },
};
</script>

<style lang="scss">
</style>

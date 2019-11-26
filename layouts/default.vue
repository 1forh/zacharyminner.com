<template>
  <div class="site-wrapper">
    <AppNavbar></AppNavbar>
    <main>
      <nuxt />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: { AppNavbar, AppFooter },
};
</script>

<style lang="scss">
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
}
</style>

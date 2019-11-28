<template>
  <div :class="['site-wrapper', { 'is-home': page === 'index' }]">
    <AppNavbar></AppNavbar>
    <main>
      <nuxt />
    </main>
    <div class="site-wrapper__accent"></div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppNavbar from '~/components/AppNavbar.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: { AppNavbar, AppFooter },
  computed: {
    ...mapState(['page']),
  },
};
</script>

<style lang="scss">
.site-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  // near footer
  &::after {
    @include bg-gradient-radial;
    content: '';
    position: absolute;
    left: 95%;
    bottom: -30vh;
    z-index: -1;
    width: 50vw;
    height: 50vw;
    transform: rotate(-45deg);
    pointer-events: none;
    box-shadow: 0 9px 20px 0 rgba(0, 0, 0, 0.81);
  }

  main {
    flex-grow: 1;
  }
}
</style>

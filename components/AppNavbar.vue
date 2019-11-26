<template>
  <header class="app-navbar">
    <nav class="d-flex justify-content-end p-3">
      <nuxt-link
        :to="link.href"
        v-for="(link, index) in links"
        :key="index"
        class="text-light px-3"
        >{{ link.name }}</nuxt-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      links: [
        { href: '/', name: 'Home' },
        { href: '/projects', name: 'Projects' },
        { href: '/articles', name: 'Articles' },
        { href: '/experience', name: 'Experience' },
      ],
    };
  },
};
</script>

<style lang="scss">
.app-navbar {
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: $white !important;

      &::after {
        opacity: 1;
        width: 100%;
      }
    }

    &.nuxt-link-exact-active {
      color: $white;

      &::after {
        opacity: 1;
        width: 100%;
      }
    }

    &::after {
      content: '';
      margin-top: 0.3rem;
      width: 0;
      height: 3px;
      background-color: $primary;
      // opacity: 0;
      transition: width 0.3s, opacity 0.3s;
    }
  }
}
</style>

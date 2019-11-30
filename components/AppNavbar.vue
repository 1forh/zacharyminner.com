<template>
  <header class="app-navbar mb-2 mb-md-0">
    <nuxt-link to="/" v-if="page !== 'index'" class="app-navbar__logo p-2 p-md-3"
      >Heyo, I'm Zach Minner.</nuxt-link
    >
    <nav class="d-flex justify-content-end p-2 p-md-3">
      <nuxt-link
        :to="link.href"
        v-for="(link, index) in links"
        :key="index"
        class="px-md-3 link-accent-secondary"
        >{{ link.name }}</nuxt-link
      >
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

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
  computed: {
    ...mapState(['page']),
  },
};
</script>

<style lang="scss">
.app-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  &__logo {
    @include font-size(24px);
    font-weight: $font-weight-bold;
    color: $white;

    &:hover,
    &:focus,
    &:active {
      color: $white;
      text-decoration: none;
    }
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;

    a {
      margin-left: 1.5rem;
      color: $white;

      &:first-child {
        margin-left: 0;
      }

      &.nuxt-link-exact-active {
        color: $white;

        @include media-breakpoint-down(sm) {
          text-decoration: none !important;
          border-bottom: 2px solid $primary;
        }

        &::after {
          transform: skew(-12deg) rotate(-2deg) translateY(0);
          opacity: 1;
        }
      }

      &::before {
        display: none;
      }
    }
  }
}
</style>

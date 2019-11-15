<template>
  <header class="app-navbar">
    <nav class="d-flex justify-content-end p-3">
      <router-link :to="link.href" v-for="(link, index) in links" :key="index" class="text-white px-2">{{ link.name }}</router-link>
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
}
</style>

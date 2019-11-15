<template>
  <article class="home">
    <AppHero
      title="Heyo, I'm Zach Minner."
      subtitle="I make websites and web applications for <a href='https://www.skycatchfire.com'>SKYCATCHFIRE</a>."
    />
    <HomeProjects :projects="projects" />
  </article>
</template>

<script>
import AppHero from '~/components/AppHero.vue';
import HomeProjects from '~/components/HomeProjects.vue';

export default {
  components: { AppHero, HomeProjects },
  data() {
    return {
      articles: null,
      projects: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <article class="home">
    <AppHero
      title="Heyo, I'm Zach Minner."
      subtitle="I make websites and web applications for <a href='https://www.skycatchfire.com'>SKYCATCHFIRE</a>."
    />
    <HomeProjects :projects="projects" />
    <HomeArticles :articles="articles" />
  </article>
</template>

<script>
import AppHero from '~/components/AppHero.vue';
import HomeProjects from '~/components/HomeProjects.vue';
import HomeArticles from '~/components/HomeArticles.vue';

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: { AppHero, HomeProjects, HomeArticles },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style lang="scss" scoped></style>

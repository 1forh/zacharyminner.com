<template>
  <article class="home">
    <AppHero>
      <AppHeading level="h1" variation="display-1" class="mb-3">Heyo, I'm Zach Minner.</AppHeading>
      <AppHeading level="h2" variation="h2" weight="light" v-balance-text>
        I make websites and web applications for
        <a href="https://www.skycatchfire.com" class="link-accent-secondary px-md-2" target="_blank"
          >SKYCATCHFIRE</a
        >.
      </AppHeading>
    </AppHero>
    <HomeProjects :projects="projects" />
    <HomeArticles :articles="articles" />
  </article>
</template>

<script>
import AppHero from '~/components/AppHero.vue';
import AppHeading from '~/components/AppHeading.vue';
import HomeProjects from '~/components/HomeProjects.vue';
import HomeArticles from '~/components/HomeArticles.vue';

export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Heyo, I'm Zach! I'm a frontend web developer from Canton, Ohio. I make websites and web applications for SKYCATCHFIRE.",
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: { AppHero, AppHeading, HomeProjects, HomeArticles },
  computed: {
    projects() {
      return this.$store.state.projects.slice(0, 3);
    },
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style lang="scss" scoped></style>

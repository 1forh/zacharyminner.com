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
import AppHero from '@/components/AppHero.vue';
import HomeProjects from '@/components/HomeProjects.vue';

export default {
  name: 'home',
  components: { AppHero, HomeProjects },
  data() {
    return {
      articles: null,
      projects: null,
    };
  },
  async mounted() {
    try {
      this.articles = await this.$flamelink.content.get({
        schemaKey: 'articles',
      });
      console.log('All of your articles:', this.articles);
    } catch (error) {
      console.log(error);
    }

    try {
      this.projects = await this.$flamelink.content.get({
        schemaKey: 'projects',
      });
      console.log('All of your projects:', this.projects);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>

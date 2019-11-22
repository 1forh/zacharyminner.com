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
  data() {
    return {
      articles: [
        {
          href: '/articles/disable-taxonomy-term-pager-in-drupal-8',
          title: 'Disable taxonomy term pager in Drupal 8',
          date: 'September 29th, 2019',
          summary:
            'In order to disable the pager on a taxonomy term page, you can set the terms_per_page_admin setting to a really high number.',
          tags: ['Drupal 8'],
        },
      ],
      projects: [
        // {
        //   href: '/projects/mtg-proxies',
        //   title: 'MTG Proxies',
        //   image: '/images/projects/mtg-proxies.png',
        // },
        // {
        //   href: '/projects/bootstrap-grid-overlay',
        //   title: 'Bootstrap Grid Overlay',
        //   image: '/images/projects/bootstrap-grid-overlay.png',
        // },
        // {
        //   href: '/projects/unnofficial-tesla-news',
        //   title: 'Unnoficial Tesla News',
        //   image: '/images/projects/unofficial-tesla-news.png',
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

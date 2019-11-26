<template>
  <AppBasicPage
    :title="article.title"
    :body="$md.render(article.body)"
    :image="article.featured_image"
  />
</template>

<script>
import AppBasicPage from '~/components/AppBasicPage';

export default {
  components: { AppBasicPage },
  async asyncData({ params, payload }) {
    if (payload) {
      return { article: payload };
    } else {
      return {
        article: await require(`~/assets/content/articles/${params.article}.json`),
      };
    }
  },
};
</script>

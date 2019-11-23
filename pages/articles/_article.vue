<template>
  <article>
    <h1>{{ article.title }}</h1>
    <div v-html="$md.render(article.body)"></div>
  </article>
</template>

<script>
export default {
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

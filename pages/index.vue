<template>
  <div class="container space-y-4">
    <div v-for="(article, index) in articles" :key="index" class="bg-gray-400">
      <nuxt-link :to="article.path">
        <pre>{{ article }}</pre>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    try {
      const articles = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').fetch();

      console.log('articles: ', articles);

      return { articles };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>

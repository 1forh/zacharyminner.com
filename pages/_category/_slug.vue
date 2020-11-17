<template>
  <article class="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto py-6">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug, category } = params;
    const article = await $content(category, slug).fetch();

    return {
      article,
    };
  },
};
</script>

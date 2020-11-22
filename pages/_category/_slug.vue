<template>
  <article class="relative pb-16 pt-4">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <header class="text-lg max-w-prose mx-auto">
        <div v-if="article.tags" class="justify-center flex space-x-3">
          <base-tag v-for="(tag, index) in article.tags" :key="index">
            {{ tag }}
          </base-tag>
        </div>
        <h1 class="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl" v-balance-text>
          {{ article.title }}
        </h1>
      </header>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <nuxt-content :document="article" />
      </div>
    </div>
  </article>
</template>

<script>
import get from 'lodash/get';
import CONFIG from '@/zach.config';

export default {
  async asyncData({ $content, params }) {
    const { slug, category } = params;
    const article = await $content(category, slug).fetch();

    return {
      article,
    };
  },
  head() {
    const title = `${get(this.article, 'title')} | ${CONFIG.site_name}`;
    const description = get(this.article, 'summary');

    return {
      title: title,
      meta: [
        { hid: 'og-title', property: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
      ],
    };
  },
};
</script>

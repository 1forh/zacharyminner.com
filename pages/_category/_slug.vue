<template>
  <article class="relative pt-4 pb-16">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <header class="mx-auto text-lg max-w-prose">
        <div v-if="article.tags" class="flex justify-center space-x-3">
          <base-tag v-for="(tag, index) in article.tags" :key="index" :tag="tag" />
        </div>
        <h1 class="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl" v-balance-text>
          {{ article.title }}
        </h1>
        <div class="flex justify-center mt-4 mb-8" v-if="article.website">
          <a :href="article.website" target="_blank" class="px-3 py-1 text-sm font-bold text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white">View website</a>
        </div>
      </header>
      <div class="mx-auto mt-6 prose prose-lg text-gray-500">
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

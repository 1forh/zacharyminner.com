<template>
  <article class="article-teaser">
    <nuxt-link :to="href" class="text-decoration-none">
      <AppHeading :text="title" level="h3" variation="h3" class="mb-2" v-balance-text />
    </nuxt-link>
    <AppHeading
      :text="date | date"
      level="h4"
      variation="h6"
      weight="normal"
      class="mb-3 text-gray-500"
    />
    <div class="lead" v-html="$md.render(summary)"></div>
    <div class="article-teaser__tags">
      <b-badge variant="primary" v-for="(tag, index) in tags" :key="index">{{ tag }}</b-badge>
    </div>
  </article>
</template>

<script>
import AppHeading from '~/components/AppHeading';

export default {
  name: 'ArticleTeaser',
  components: { AppHeading },
  props: ['href', 'title', 'image', 'date', 'summary', 'tags'],
};
</script>

<style lang="scss" scoped>
.article-teaser {
}
</style>

<template>
  <div class="articles pt-3 pb-5">
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="2" cols="12" class="mb-5">
          <AppHeading>Articles</AppHeading>
        </b-col>
        <b-col v-for="(article, index) in articles" :key="index" lg="8" offset-lg="2" class="mb-5">
          <ArticleTeaser
            :href="`/articles/${article.slug}`"
            :title="article.title"
            :date="article.date"
            :summary="article.summary"
            :tags="article.tags"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeading from '~/components/AppHeading';
import ArticleTeaser from '~/components/ArticleTeaser.vue';

export default {
  components: { AppHeading, ArticleTeaser },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

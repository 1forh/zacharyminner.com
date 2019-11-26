<template>
  <component :is="type" class="home-articles">
    <!-- <div class="home-articles__background bg-gray-200"></div> -->
    <div class="home-articles__content">
      <AppHeading level="h2" variation="display-3" align="center" text="Articles" class="mb-6" />
      <b-container fluid>
        <b-row>
          <b-col v-for="(article, index) in articles" :key="index" cols="6" offset="3">
            <ArticleTeaser
              :href="`/articles/${article.slug}`"
              :title="article.title"
              :date="article.date"
              :summary="article.summary"
              :tags="article.tags"
            />
          </b-col>
          <!-- <b-col cols="12" class="d-flex justify-content-center mt-6">
            <b-button variant="primary" href="/articles" size="lg">View all articles</b-button>
          </b-col>-->
        </b-row>
      </b-container>
    </div>
  </component>
</template>

<script>
import AppHeading from '~/components/AppHeading.vue';
import ArticleTeaser from '~/components/ArticleTeaser.vue';

export default {
  name: 'HomeArticles',
  components: { AppHeading, ArticleTeaser },
  props: {
    type: {
      type: String,
      default: 'section',
    },
    articles: Array,
  },
};
</script>

<style lang="scss">
.home-articles {
  position: relative;
  z-index: 2;
  padding-top: 6rem;
  padding-bottom: 10rem;

  &__content {
    position: relative;
    z-index: 2;
  }
}
</style>

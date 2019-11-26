<template>
  <article class="pt-3 pb-5 basic-page">
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="2">
          <AppHeading level="h1" :text="title" class="mb-5" v-balance-text />
          <div class="mb-5">
            <img :src="image" :alt="title" />
          </div>
          <b-button :href="website" class="mb-5">View website</b-button>
          <div v-html="body" />
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script>
import Prism from '~/plugins/libs/prism';
import AppHeading from '~/components/AppHeading';

export default {
  name: 'AppBasicPage',
  components: { AppHeading },
  props: ['title', 'body', 'image', 'website'],
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss">
.basic-page {
  .heading {
    display: flex;
    flex-direction: column;

    &::after {
      content: '';
      margin-top: 1rem;
      width: 150px;
      height: 5px;
      background-color: $primary;
    }
  }
}
</style>

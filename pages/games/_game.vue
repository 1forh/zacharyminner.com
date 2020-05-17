<template>
  <AppBasicPage
    :title="game.title"
    :body="$md.render(game.body)"
    :image="game.featured_image"
    :website="game.website"
  />
</template>

<script>
import AppBasicPage from '~/components/AppBasicPage';

export default {
  components: { AppBasicPage },
  async asyncData({ params, payload }) {
    if (payload) {
      return { game: payload };
    } else {
      return {
        game: await require(`~/assets/content/games/${params.game}.json`),
      };
    }
  },
};
</script>

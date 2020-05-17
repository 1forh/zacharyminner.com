<template>
  <div class="projects pt-3 pb-5">
    <b-container fluid>
      <b-row>
        <b-col lg="8" offset-lg="2" cols="12">
          <AppHeading class="mb-5">Games</AppHeading>
          <b-row>
            <b-col v-for="(game, index) in games" :key="index" md="6" class="mb-5">
              <ProjectTeaser
                :href="`/games/${game.slug}`"
                :title="game.title"
                :image="game.featured_image"
                :show-accent="true"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeading from '~/components/AppHeading';
import ProjectTeaser from '~/components/ProjectTeaser';

export default {
  components: { AppHeading, ProjectTeaser },
  head() {
    return {
      title: 'Games | Zach Minner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Here are all of the games that I've built. Among them are custom built games as well as games built while following along with tutorials and courses.",
        },
      ],
    };
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
  },
};
</script>

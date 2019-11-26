<template>
  <AppBasicPage
    :title="project.title"
    :body="$md.render(project.body)"
    :image="project.featured_image"
    :website="project.website"
  />
</template>

<script>
import AppBasicPage from '~/components/AppBasicPage';

export default {
  components: { AppBasicPage },
  async asyncData({ params, payload }) {
    if (payload) {
      return { project: payload };
    } else {
      return {
        project: await require(`~/assets/content/projects/${params.project}.json`),
      };
    }
  },
  mounted() {
    console.log(this.project);
  },
};
</script>

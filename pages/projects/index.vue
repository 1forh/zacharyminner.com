<template>
  <div class="projects">
    <AppHeading text="Projects" />
  </div>
</template>

<script>
import AppHeading from '~/components/AppHeading';

export default {
  components: { AppHeading },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

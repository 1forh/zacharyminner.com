<template>
  <div class="projects pt-3 pb-5">
    <b-container>
      <b-row>
        <b-col>
          <AppHeading text="Projects" />
        </b-col>
      </b-row>
    </b-container>
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

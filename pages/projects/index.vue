<template>
  <div class="projects pt-3 pb-5">
    <b-container fluid>
      <b-row>
        <b-col lg="8" offset-lg="2" cols="12" class="mb-5">
          <AppHeading>Projects</AppHeading>
          <b-row>
            <b-col v-for="(project, index) in projects" :key="index" cols="6" class="mb-5">
              <ProjectTeaser
                :href="`/projects/${project.slug}`"
                :title="project.title"
                :image="project.featured_image"
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
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

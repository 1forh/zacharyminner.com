<template>
  <component :is="type" class="home-projects">
    <div class="home-projects__background bg-gradient-radial"></div>
    <div class="home-projects__content">
      <AppHeading level="h2" variation="display-3" align="center" text="Projects" class="mb-6" />
      <b-container>
        <b-row>
          <b-col v-for="(project, index) in projects" :key="index" cols="4">
            <ProjectTeaser :href="project.href" :title="project.title" :image="project.image" />
          </b-col>
          <b-col cols="12" class="d-flex justify-content-center mt-6">
            <b-button variant="primary" href="/projects" size="lg">View all projects</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </component>
</template>

<script>
import AppHeading from '~/components/AppHeading.vue';
import ProjectTeaser from '~/components/ProjectTeaser.vue';

export default {
  name: 'HomeProjects',
  components: { AppHeading, ProjectTeaser },
  props: {
    type: {
      type: String,
      default: 'section',
    },
    projects: Array,
  },
  mounted() {
    console.log(this.projects);
  },
};
</script>

<style lang="scss">
.home-projects {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 11rem;

  &__background {
    position: absolute;
    z-index: 1;
    top: -12rem;
    left: -10vw;
    width: 200vw;
    height: 865px;
    transform: rotate(-15deg);
    box-shadow: 0 9px 20px 0 rgba(0, 0, 0, 0.81);
  }

  &__content {
    position: relative;
    z-index: 2;
  }
}
</style>

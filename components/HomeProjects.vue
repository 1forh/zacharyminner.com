<template>
  <component :is="type" class="home-projects">
    <div class="home-projects__background"></div>
    <div class="home-projects__social">
      <b-container fluid>
        <b-row>
          <a
            href="https://github.com/1forh"
            target="_blank"
            class="text-light mr-5"
          >github.com/1forh</a>
          <a href="#" target="_blank" class="text-light">codepen.io/1forh</a>
        </b-row>
      </b-container>
    </div>
    <div class="home-projects__content">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <AppHeading
              level="h2"
              variation="display-3"
              align="center"
              class="mb-5 mb-md-6 text-dark"
            >Projects</AppHeading>
          </b-col>
          <b-col v-for="(project, index) in projects" :key="index" xl="4" class="mb-5 mb-md-0">
            <ProjectTeaser
              :href="`/projects/${project.slug}`"
              :title="project.title"
              :image="project.featured_image"
            />
          </b-col>
          <b-col cols="12" class="d-flex justify-content-center mt-0 mt-md-6">
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
};
</script>

<style lang="scss">
.home-projects {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 11rem;

  @include media-breakpoint-up(xxl) {
    padding-top: 10rem;
  }

  @include media-breakpoint-down(sm) {
    padding-top: 2rem;
    padding-bottom: 0;
  }

  .heading {
    @include media-breakpoint-down(sm) {
      color: $white !important;
      text-align: left !important;
    }
  }

  &__background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 55vw;
    transform: rotate(-15deg);

    @include media-breakpoint-down(sm) {
      display: none;
    }

    &::before {
      @include cover-absolute;
      @include bg-gradient-radial;
      left: 50%;
      content: '';
      width: 200vw;
      height: 100%;
      box-shadow: 0 9px 20px 0 rgba(0, 0, 0, 0.81);
      transform: translateX(-50%);
    }
  }

  &__social {
    position: absolute;
    z-index: 3;
    top: -4rem;
    left: 50%;
    width: 100%;
    padding-left: 0;
    transform: translateX(-50%) rotate(-15deg);
    font-size: 1.5rem;

    @include media-breakpoint-down(sm) {
      display: none;
    }

    .container-fluid {
      padding-left: 1.5rem;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }
}
</style>

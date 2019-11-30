<template>
  <div class="projects pt-3 pb-5">
    <b-container fluid>
      <b-row>
        <b-col lg="8" offset-lg="2" cols="12">
          <AppHeading class="mb-5">Projects</AppHeading>
          <b-row>
            <b-col v-for="(project, index) in projects" :key="index" md="6" class="mb-5">
              <ProjectTeaser
                :href="`/projects/${project.slug}`"
                :title="project.title"
                :image="project.featured_image"
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
      title: 'Projects | Zach Minner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Here are various projects that I've worked on ranging from Vue.js and Angular apps to Chrome extensions.",
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

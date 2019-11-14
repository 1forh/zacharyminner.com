<template>
  <component :is="type" class="home-projects vh-100">
    <div class="home-projects__background bg-gradient-radial"></div>
    <div class="home-projects__content">
      <AppHeading level="h2" variation="display-2" align="center">Projects</AppHeading>
      <!-- <ul>
      <li v-for="(project, index) in projects" :key="index">
        <pre><code>{{ project }}</code></pre>
      </li>
      </ul>-->
    </div>
  </component>
</template>

<script>
import AppHeading from '@/components/AppHeading.vue';

export default {
  name: 'HomeProjects',
  components: { AppHeading },
  props: {
    type: {
      type: String,
      default: 'section',
    },
    projects: Object,
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
    top: -5rem;
    width: 1933px;
    height: 865px;
    transform: rotate(-20deg);
    box-shadow: 0 9px 20px 0 rgba(0, 0, 0, 0.81);
  }

  &__content {
    position: relative;
    z-index: 2;
  }
}
</style>

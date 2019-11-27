<template>
  <component :is="type" class="hero">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <slot />
        </b-col>
      </b-row>
    </b-container>
  </component>
</template>

<script>
import AppHeading from '~/components/AppHeading.vue';

export default {
  name: 'AppHero',
  components: { AppHeading },
  props: {
    type: {
      type: String,
      default: 'section',
    },
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss">
.hero {
  padding: 8rem 0 10rem;
}
</style>

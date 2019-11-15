<template>
  <component :is="type" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AppHeading level="h1" variation="display-1" :text="title" class="mb-3" />
          <AppHeading level="h2" variation="h2" weight="normal" :text="subtitle" />
        </div>
      </div>
    </div>
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
  padding-top: 14rem;
  padding-bottom: 12rem;

  a {
    color: $white;
    font-weight: $font-weight-bold;
  }
}
</style>

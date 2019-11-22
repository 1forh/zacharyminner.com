<template>
  <div class="articles">
    <AppHeading text="Articles" />
  </div>
</template>

<script>
import AppHeading from '~/components/AppHeading';

export default {
  components: { AppHeading },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

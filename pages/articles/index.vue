<template>
  <div class="articles pt-3 pb-5">
    <b-container>
      <b-row>
        <b-col>
          <AppHeading text="Articles" />
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
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

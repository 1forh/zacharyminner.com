<template>
  <div class="experience pt-3 pb-5">
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="2" cols="12">
          <AppHeading class="mb-5 mb-md-6">Experience</AppHeading>

          <div v-for="(job, index) in jobs" :key="index" class="job mb-5 mb-md-6">
            <header>
              <AppHeading class="mb-1" variation="h3" level="h2">{{ job.title }}</AppHeading>
              <div :class="['job__date', { 'job__date--current': !job.end_date }]">
                {{ job.start_date | date('MMM YYYY') }}
                &nbsp;-&nbsp;
                <span v-if="job.end_date">{{ job.end_date | date('MMM YYYY') }}</span>
                <span v-else="!job.end_date">Current</span>
              </div>
            </header>
            <AppHeading class="mb-3 text-muted" variation="h6" level="h3" weight="light">{{
              job.position
            }}</AppHeading>
            <div class="text-white" v-html="$md.render(job.body)" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.job {
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @include media-breakpoint-down(sm) {
      margin-bottom: 0.5rem;
      flex-direction: column;
    }
  }

  &__date {
    @include font-size(15px);
    padding-bottom: 0.4rem;
    border-bottom: 2px solid $white;

    @include media-breakpoint-down(sm) {
      padding-bottom: 0;
      border-bottom: 0;
    }

    &--current {
      border-color: $primary;
    }
  }

  ul {
    margin: 0;
  }
}
</style>

<script>
import AppHeading from '~/components/AppHeading';

export default {
  components: { AppHeading },
  head: {
    title: 'Experience | Zach Minner',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "A list of past and current jobs that I've had utilizing my web development skillset.",
      },
    ],
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
  },
};
</script>

<template>
  <article class="project-teaser">
    <div
      class="project-teaser__accent"
      v-if="showAccent"
      :style="{ transform: `rotate(${getRotation()})` }"
    />
    <nuxt-link :to="href" class="text-light overflow-hidden shadow-lg">
      <div class="project-teaser__image" :style="{ 'background-image': `url(${image})` }"></div>
      <div class="project-teaser__content">
        <AppHeading level="h3" variation="h4" class="text-center" v-balance-text>
          {{ title }}
        </AppHeading>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import AppHeading from '~/components/AppHeading';

export default {
  name: 'ProjectTeaser',
  components: { AppHeading },
  props: ['href', 'title', 'image', 'showAccent'],
  methods: {
    getRotation() {
      const number = Math.ceil(Math.random() * 5);
      const isNegative = Math.random() < 0.5 ? true : false;

      if (isNegative) {
        return `-${number}deg`;
      } else {
        return `${number}deg`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-teaser {
  position: relative;
  $this: &;

  &__accent {
    @include bg-gradient-radial($primary, $secondary);
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    z-index: -1;
    box-shadow: $box-shadow-lg;
  }

  a {
    @include maintain-ratio(4, 3);
    position: relative;
    display: block;

    &:hover {
      color: $secondary !important;

      #{$this}__image::after {
        background-color: $black;
      }
    }
  }

  &__image {
    @include cover-absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
      @include cover-absolute;
      content: '';
      z-index: 2;
      background-color: rgba($black, 0.6);
      mix-blend-mode: multiply;
      transition: background-color 0.3s;
    }
  }

  &__content {
    @include cover-absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

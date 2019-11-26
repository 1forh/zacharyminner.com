<template>
  <component
    :is="level"
    :class="['heading', variation, `font-weight-${weight}`, `text-${align}`]"
    v-html="text"
  />
</template>

<script>
export default {
  name: 'AppHeading',
  props: {
    level: {
      type: String,
      default: 'h1',
      validator: (value) => value.match(/(h1|h2|h3|h4|h5|h6)/),
    },
    variation: {
      type: String,
      default: 'h1',
      validator: (value) =>
        value.match(/(h1|h2|h3|h4|h5|h6|display-1|display-2|display-3|display-4)/),
    },
    weight: {
      type: String,
      default: 'bold',
      validator: (value) => value.match(/(normal|light|lighter|bold|bolder)/),
    },
    align: {
      type: String,
      default: 'left',
      validator: (value) => value.match(/(left|center|right)/),
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.heading {
}
</style>

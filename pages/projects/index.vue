<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.projects;
    },
  },
};
</script>

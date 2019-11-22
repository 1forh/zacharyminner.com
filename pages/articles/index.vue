<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.articles;
    },
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      articles: []
    };
  },
  async mounted() {
    try {
      this.articles = await this.$flamelink.content.get({
        schemaKey: "articles"
      });
      console.log("All of your articles:", this.articles);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

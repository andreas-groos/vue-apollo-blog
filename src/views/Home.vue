<template>
  <div class="home">
    <h1 class="text-sm-center vue-accent">Apollo Blog</h1>
    <v-divider></v-divider>
    <blog-post-overview />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPostOverview from "../components/BlogPostOverview.vue";

export default {
  name: "home",
  components: {
    BlogPostOverview
  }
};
</script>

<style >
.vue-accent {
  color: #42b983;
  background: #424242;
}
</style>

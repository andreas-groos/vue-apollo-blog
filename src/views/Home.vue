<template>
  <div class="home">
    <h1 class="text-sm-center">Apollo Blog</h1>
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

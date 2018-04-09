<template>
  <div class="home">
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

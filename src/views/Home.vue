<template>
  <FullPage>
    <blog-post-overview />
  </FullPage>
</template>

<script>
// @ is an alias to /src
import BlogPostOverview from "../components/BlogPostOverview.vue";
import FullPage from "../components/FullPage";

export default {
  name: "home",
  components: {
    BlogPostOverview,
    FullPage
  }
};
</script>

<style >
.vue-accent {
  color: #42b983;
  background: #424242;
}
</style>

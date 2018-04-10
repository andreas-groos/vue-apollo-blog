<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <h4 v-if="posts.length === 0"
        class="text-xs-center">No posts yet, go and write one!</h4>
    <BlogList v-else
              :posts="posts" />
  </div>
</template>

<script>
import BlogList from "./BlogList";
import { GET_ALL_POSTS } from "../apollo/queries";

export default {
  name: "BlogPostOverview",
  data() {
    return {
      posts: [],
      loading: 0
    };
  },
  apollo: {
    posts: {
      query: GET_ALL_POSTS
    }
  },
  components: { BlogList }
};
</script>

<style scoped>
</style>

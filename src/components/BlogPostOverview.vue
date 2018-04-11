<template>
  <div>
    <div v-if="loading">
      <v-progress-linear v-if="submitting"
                         :indeterminate="true"></v-progress-linear>
    </div>
    <h4 v-else-if="posts.length === 0"
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

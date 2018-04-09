<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <p v-if="posts && posts.length > 0">{{posts[1].title}}</p>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
</style>

<template>
  <div>
    <h4>BlogPost</h4>
    <h4 v-if="loading">Loading...</h4>
    <div v-else>
      <h1>{{post.title}}</h1>
      <VueMarkdown :source="post.blogText"></VueMarkdown>
      <div v-if="post.comments && post.comments.length">
        <ul>
          <li v-for="comment in post.comments"
              :key="comment.date">{{comment.text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_POST } from "../apollo/queries";
import VueMarkdown from "vue-markdown";
export default {
  name: "BlogPost",
  props: {
    test: String
  },
  components: { VueMarkdown },
  data() {
    return {
      post: {},
      loading: 0
    };
  },
  apollo: {
    post: {
      query: GET_POST,
      variables() {
        return {
          id: this.$route.params.id
        };
      }
    }
  }
};
</script>

<style>
</style>

<template>
  <v-layout row
            wrap>
    <v-flex xs12
            sm6
            md4
            class="my-2"
            v-for="(post,index) in posts"
            :key="post.id">
      <router-link class="no-underline"
                   :to="'post/' + post.id">
        <v-card class="ma-2"
                height="100%">
          <v-card-media :src="`https://placeimg.com/640/480/${tag[index % 5]}`"
                        height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h1 class="headline
                mb-0
                ">
                <b>{{post.title}}</b>
              </h1>
              <VueMarkdown :source="post.blogText.substring(0,200)"></VueMarkdown>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat
                   block
                   outline
                   color="blue
                ">read more</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "BlogList",
  props: {
    posts: Array
  },
  data() {
    return {
      tag: ["animals", "architecture", "nature", "people", "tech"]
    };
  },
  components: { VueMarkdown }
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>

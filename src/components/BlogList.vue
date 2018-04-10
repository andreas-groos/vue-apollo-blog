<template>
  <v-layout row
            wrap>
    <v-flex xs12
            sm6
            md4
            fluid
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
          <v-flex fill-height>
            <v-card-title primary-title>
              <h1 class="headline
                mb-0 
                ">
                <b>{{post.title}}</b>
              </h1>
              <div>
                <div>
                  <h4>
                    <i>by </i>{{post.authorName}} </h4>
                </div>
                <h4 class="text-xs-right">{{d(post.createdAt)}}</h4>
              </div>
              <VueMarkdown :source="post.blogText.substring(0,200)+'...'"></VueMarkdown>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn flat
                     block
                     outline
                     color="blue
                ">read more</v-btn>
            </v-card-actions>
          </v-flex>
        </v-card>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from "vue-markdown";
import { format } from "date-fns";
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
  methods: {
    d: d => format(d, "MM-DD-YY")
  },
  components: { VueMarkdown }
};
</script>

<style lang="scss" scoped>
.no-underline {
  text-decoration: none;
}
</style>

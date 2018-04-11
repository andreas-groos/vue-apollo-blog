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
      <v-card class="ma-2"
              hover
              height="100%"
              :to="'post/' + post.id">
        <div class="img-container">

          <v-card-media :src="`https://placeimg.com/640/480/${tag[index % 5]}`"
                        height="200px">
          </v-card-media>
          <p class="bottom-right">
            {{post.comments.length}}
            <v-icon color="white">comment</v-icon>
          </p>
        </div>
        <v-card-title primary-title>

          <h1 class="headline
                mb-0 
                ">
            {{post.title}}
          </h1>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex>
              <h4>
                <i>by </i>{{post.authorName}} </h4>
            </v-flex>
            <v-flex>
              <h4 class="text-xs-right">{{d(post.createdAt)}}</h4>
            </v-flex>
          </v-layout>
          <VueMarkdown :source="post.blogText.substring(0,200)+'...'"></VueMarkdown>
        </v-card-text>
        <v-card-actions>
          <v-btn flat
                 block
                 outline
                 color="primary
                ">read more</v-btn>
        </v-card-actions>
      </v-card>
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
// TODO: Get 'read more' button aligned to bottom of card
// https://codepen.io/andreas-groos/pen/zWbxmO?editors=1100
.img-container {
  position: relative;
  text-align: center;
  color: whitesmoke;
  font-weight: 700;
}

.bottom-right {
  position: absolute;
  bottom: -3px;
  right: 15px;
  font-size: 1.3rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 5px;
}

img {
  // object-fit: contain;
}
</style>

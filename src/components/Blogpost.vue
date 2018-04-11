<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <div v-else>
      <h1>{{post.title}}</h1>
      <hr class="mb-3">
      <h3>by {{post.authorName}}</h3>
      <v-layout row
                wrap
                class="mb-3">
        <v-flex>
          <h4>{{d(post.createdAt)}}</h4>
        </v-flex>
        <v-flex>
          <h6 class="text-xs-right">{{post.likes}} likes</h6>
        </v-flex>
      </v-layout>
      <VueMarkdown :source="post.blogText"></VueMarkdown>
      <div v-if="user">

        <div v-if="!alreadyLiked"
             mb-3>
          <v-layout row
                    justify-center>

            <v-icon size="
           50px
           "
                    @click="likePost"
                    color="red
           ">fa-heart</v-icon>
          </v-layout>
        </div>
        <v-layout v-else
                  row
                  justify-center>
          <h4>You already 'liked' this post.</h4>
        </v-layout>
      </div>
      <Comments :comments="post.comments
           "
                :id="post.id
           " />
    </div>
  </div>
</template>

<script>
import { GET_POST } from "../apollo/queries";
import { ADD_LIKE } from "../apollo/mutations";
import VueMarkdown from "vue-markdown";
import Prism from "prismjs";
import { format } from "date-fns";
import Comments from "./Comments.vue";

export default {
  name: "BlogPost",
  props: {
    test: String
  },
  components: { VueMarkdown, Comments },
  data() {
    return {
      post: {},
      loading: 0
    };
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {
    d: d => format(d, "MMM-DD-YY HH:MMa"),
    likePost: function() {
      this.$apollo.mutate({
        mutation: ADD_LIKE,
        variables: {
          id: this.post.id,
          user: this.user.uid
        },
        refetchQueries: [
          {
            query: GET_POST,
            variables: { id: this.post.id }
          }
        ]
      });
    }
  },
  computed: {
    user: function() {
      return this.$store.getters.getUser;
    },
    alreadyLiked: function() {
      if (this.post && this.post.likesBy && this.user) {
        return this.post.likesBy.includes(this.user.uid);
      } else return false;
    }
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

<style lang="scss" scoped>
// TODO: make syntax highlighting better!
@import "../../node_modules/prismjs/themes/prism-solarizedlight.css";
img {
  // max-width: 25%;
  // float: left;
}
h1 {
  text-align: center;
}
</style>

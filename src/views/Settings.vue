<template>
  <FullPage>
    <v-flex xs12
            md10
            offest-md-1>
      <v-card>
        <v-card-title primary-title>
          <v-layout column>
            <h3 class="headline mb-0 text-xs-center">{{displayName}}</h3>
            <h6 class="subheading">Number of articles: {{numberOfArticles}}</h6>
            <h6 class="subheading mb-3">Number of total comments: {{numberOfComments}}</h6>
            <v-divider></v-divider>
            <v-card>

              <v-list dense>
                <v-container>

                  <template v-for="(post, index) in postsByUser">
                    <p v-if="post.title"
                       class="subheading mb-0"
                       :key="post.id">{{ post.title }}</p>
                    <v-list-tile-content>
                      <v-container justify-space-between>
                        <v-layout row>
                          <v-flex>
                            <v-list-tile-sub-title>{{post.likes}} likes</v-list-tile-sub-title>
                          </v-flex>
                          <v-flex>
                            <v-list-tile-sub-title>{{post.comments.length}} comments</v-list-tile-sub-title>
                          </v-flex>
                          <v-flex>
                            <v-list-tile-sub-title>{{ago(post.createdAt)}} ago</v-list-tile-sub-title>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                  </template>
                </v-container>
              </v-list>
            </v-card>
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat
                 color="orange">Share</v-btn>
          <v-btn flat
                 color="orange">Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </FullPage>
</template>

<script>
import FullPage from "../components/FullPage.vue";
import { GET_POSTS_BY_USER } from "../apollo/queries.js";
import { distanceInWords } from "date-fns";
export default {
  name: "Settings",
  components: { FullPage },
  data() {
    return {
      loading: 0,
      postsByUser: []
    };
  },
  methods: {
    ago: d => distanceInWords(new Date(), d)
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    displayName() {
      let name = "";
      if (this.user && this.user.displayName) {
        name = this.user.displayName;
      }
      return name;
    },
    // posts() {
    //   return this.$apollo.queries.postsByUser;
    // },
    numberOfArticles() {
      return this.postsByUser.length || null;
    },
    numberOfComments() {
      let total = 0;
      this.postsByUser.map(p => {
        total = total + p.comments.length;
      });
      return total;
    }
  },
  apollo: {
    postsByUser: {
      query: GET_POSTS_BY_USER,
      variables() {
        return { name: this.displayName };
      }
    }
  }
};
</script>

<style>
</style>

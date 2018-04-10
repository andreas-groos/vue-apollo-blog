<template>
  <v-layout row
            wrap>
    <v-flex xs12
            sm6
            md4
            v-for="post in posts"
            :key="post.id">
      <router-link class="no-underline"
                   :to="'post/' + post.id">
        <v-card class="ma-2">

          <v-card-media src="https://placeimg.com/640/480/nature"
                        height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{post.title}}</h3>
              <div>{{post.blogText.substring(0,200)}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat
                   block
                   outline
                   color="blue">read more</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>
    </v-flex>
  </v-layout>
  <!-- <ul>
    <li v-for="post in posts"
        :key="post.id">
      <h4>
      </h4>
    </li>
  </ul> -->
</template>

<script>
export default {
  name: "BlogList",
  props: {
    posts: Array
  }
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>

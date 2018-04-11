<template>
  <div id="page">
    <v-container fluid
                 fill-height>
      <v-layout justify-center
                align-center>
        <v-flex text-xs-center>

          <h1>Vue is awesome</h1>
          <h4 class="my-3">simple, fast, easy....</h4>
          <v-icon color="red"
                  size="80px">fa-heart</v-icon>
          <div>
            <h4 class="my-2">Frontend:</h4>
            <a class="github-button"
               href="https://github.com/andreas-groos/vue-apollo-blog"
               data-icon="octicon-repo-forked"
               data-size="large"
               aria-label="Fork ntkme/github-buttons on GitHub">fork on github</a>
            <h4 class="my-2">Backend:</h4>
            <a class="github-button"
               href="https://github.com/andreas-groos/apollo-blog-express-server"
               data-icon="octicon-repo-forked"
               data-size="large"
               aria-label="Fork ntkme/github-buttons on GitHub">fork on github</a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>


<style scoped>
#page {
  height: 100vh;
}
a {
  display: block;
}
</style>

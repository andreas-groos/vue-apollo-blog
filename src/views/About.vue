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
</style>

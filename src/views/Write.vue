<template>
  <div>
    <v-layout row
              justify-center
              class="my-2 elevation-3">
      <v-progress-linear v-if="submitting"
                         :indeterminate="true"></v-progress-linear>

      <h1>
        <input type="text"
               v-model="title">
      </h1>
    </v-layout>
    <div id="editor">

      <MavonEditor style="height: 100%"
                   language="en"
                   v-model="value"
                   @save="save"></MavonEditor>
    </div>
    <v-layout row
              justify-center
              mt-2>
      <v-btn @click="save"
             flat
             outline
             color="blue">Save
        <v-icon class="pl-2">save</v-icon>
      </v-btn>
      <v-btn flat
             outline
             color="
                red
                ">Cancel
        <v-icon class="pl-2
                ">cancel</v-icon>

      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import gql from "graphql-tag";
import { ADD_POST } from "../apollo/mutations";
import { GET_ALL_POSTS } from "../apollo/queries";

export default {
  name: "write",
  data() {
    return {
      value: "",
      title: "",
      submitting: false
    };
  },
  methods: {
    save: function() {
      this.submitting = true;
      this.$apollo
        .mutate({
          mutation: ADD_POST,
          variables: {
            authorName: "Andreas",
            title: this.title + "\n",
            blogText: this.value
          },
          // NOTE: Seems like a very complicated way to update!
          update: (store, { data: { createPost } }) => {
            const data = store.readQuery({ query: GET_ALL_POSTS });
            console.log("data", data);
            data.posts.push(createPost);
            store.writeQuery({ query: GET_ALL_POSTS, data });
          }
          // NOTE: refetchQueries didn't work, seemed to work in the React version
          // refetchQueries: ["GET_ALL_POSTS"]
        })
        .then(data => {
          console.log(data);
          this.$router.push("/");
        });
    }
  },
  // TODO: customize editor
  components: { MavonEditor: MavonEditor.mavonEditor }
};
</script>

<style>
#editor {
  margin: auto;
  width: 80%;
  height: 80vh;
}
</style>

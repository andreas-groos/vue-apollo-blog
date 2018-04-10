<template>
  <div>
    <v-layout row
              justify-center
              class="my-2 elevation-3">

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

import { ADD_POST } from "../apollo/mutations";

export default {
  name: "write",
  data() {
    return {
      value: "",
      title: ""
    };
  },
  methods: {
    save: function() {
      this.$apollo.mutate({
        mutation: ADD_POST,
        variables: {
          authorName: "Andreas",
          title: this.title,
          blogText: this.value
        }
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

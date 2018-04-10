<template>
  <div>
    <div id="editor">

      <MavonEditor style="height: 100%"
                   language="en"
                   v-model="value"
                   @save="save"></MavonEditor>
    </div>
    <v-layout row
              justify-center
              mt-2>
      <v-btn flat
             outline
             color="blue
                ">Save</v-btn>
      <v-btn flat
             outline
             color="red
                ">Cancel</v-btn>
    </v-layout>
  </div>
</template>

<script>
import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "write",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    save: function() {
      alert("save");
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

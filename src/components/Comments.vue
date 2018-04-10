<template>
  <v-layout row>
    <v-flex xs12
            sm10
            offset-sm1>

      <h2 v-if="comments &&comments.length===0"
          class="pale">Nobody commented yet</h2>
      <div v-else>
        <ul>

          <li v-for="comment in comments"
              :key="comment.date">
            <div class="comment-box">
              <p class="pb-0">
                {{comment.text}}
              </p>
            </div>
          </li>

        </ul>
      </div>
      <v-card class="mt-3">
        <v-container fluid
                     class="pa-0 mt-2">
          <v-layout wrap>
            <v-flex xs12>
              <div @keyup.ctrl.enter="submit">
                <v-text-field label="New comment...."
                              v-model="newComment"
                              counter=250
                              max="250"
                              auto-grow
                              multi-line
                              full-width></v-text-field>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <small>ctrl-enter to submit</small>
      <v-btn @click="submit"
             block
             outline
             color="info">submit</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { ADD_COMMENT } from "../apollo/mutations.js";
import { GET_POST } from "../apollo/queries.js";
import gql from "graphql-tag";

export default {
  name: "Comments",
  props: ["comments", "id"],
  data() {
    return {
      newComment: ""
    };
  },
  methods: {
    submit: function() {
      this.$apollo
        .mutate({
          mutation: ADD_COMMENT,
          variables: {
            text: this.newComment,
            id: this.id,
            user: "Joe Blow"
          },
          refetchQueries: [
            {
              query: GET_POST,
              variables: { id: this.id }
            }
          ]
        })
        .then(() => {
          this.newComment = "";
          console.log(`dONE`);
        });
    }
  }
};
</script>


<style scoped>
.pale {
  color: grey;
}
li {
  list-style-type: none;
}
.comment-box {
  border: 1px solid #424242;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem 0.5rem;
  background: white;
  color: #424242;
}
</style>

<template>
  <v-layout row>
    <v-flex xs12
            sm10
            offset-sm1>

      <h2 v-if="comments &&comments.length===0"
          class="pale">Nobody commented yet</h2>
      <div v-else>
        <ul>
          <transition-group name="list"
                            tag="p">
            <li v-for="comment in comments"
                :key="comment.date">
              <div class="comment-box">
                <v-layout row
                          class="pt-2">
                  <v-flex>

                    <h6>{{comment.user}}</h6>
                  </v-flex>
                  <v-flex>

                    <h6 class="text-xs-right">{{ago(comment.date)}} ago</h6>
                  </v-flex>

                </v-layout>
                <p class="pb-0">
                  {{comment.text}}
                </p>
              </div>
            </li>
          </transition-group>
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
import { distanceInWords } from "date-fns";

export default {
  name: "Comments",
  props: ["comments", "id"],
  data() {
    return {
      newComment: ""
    };
  },
  methods: {
    ago: d => distanceInWords(new Date(), d),
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


<style  scoped>
.pale {
  color: grey;
}
li {
  list-style-type: none;
}
.comment-box {
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  background: white;
  color: #424242;
  /* font-size: 0.8rem; */
}
.comment-box > p {
  margin: 4px 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-out;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
</style>

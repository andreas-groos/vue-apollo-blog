<template>

  <div>
    <v-container fluid
                 fill-height>
      <v-layout justify-center
                align-center>
        <v-form v-model="valid"
                ref="formup"
                lazy-validation>
          <v-text-field label="Name"
                        v-model="name"
                        :rules="nameRules"
                        :counter="20"
                        required></v-text-field>
          <v-text-field label="E-mail"
                        v-model="email"
                        :rules="emailRules"
                        required></v-text-field>
          <v-text-field label="Password"
                        type='password'
                        v-model="password"
                        :counter="8"
                        :rules="passwordRules"
                        required></v-text-field>
          <v-btn color="primary"
                 :disabled="!valid"
                 @click="submit">
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-layout>
      <v-dialog v-model="dialog"
                max-width="500px">
        <v-card>
          <v-card-title>
            <h3 class="mb-3">{{error.message}}</h3>
            <h3>Do you want to
              <router-link to='/sign-in'>sign in</router-link> instead? </h3>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary"
                   flat
                   @click.stop="dialog=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>

</template>

<script>
import Firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      valid: true,
      dialog: false,
      error: "",
      name: "",
      email: "",
      password: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 8) || "Password must be at least 8 characters long"
      ]
    };
  },
  methods: {
    submit: function() {
      if (this.$refs.formup.validate()) {
        Firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.$store.commit("setUser", { user });
              this.$router.replace("/");
            },
            error => {
              this.error = error;
              this.dialog = true;
            }
          );
      }
    },
    clear: function() {
      this.$refs.formup.reset();
    }
  }
};
</script>

<style>
</style>

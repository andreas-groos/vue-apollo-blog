

<template>
  <div>
    <v-container fluid
                 fill-height>
      <v-layout justify-center
                align-center>
        <v-form v-model="valid"
                ref="form"
                lazy-validation>
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
            Sign In
          </v-btn>
          <v-btn @click="abort">Abort</v-btn>
          <v-btn primary
                 outline
                 to="sign-up">
            Sign Up
          </v-btn>
        </v-form>
      </v-layout>
      <v-dialog v-model="dialog"
                max-width="500px">
        <v-card>
          <v-card-title>
            <h3 class="mb-3">{{error.message}}</h3>
            <h3>Do you want to
              <router-link to='/sign-up'>sign up</router-link> instead? </h3>
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
  name: "SignIn",
  data() {
    return {
      valid: true,
      dialog: false,
      error: "",
      email: "",
      password: "",
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
  mounted() {
    const user = this.$store.getters.getUser;
  },
  methods: {
    submit: function() {
      if (this.$refs.form.validate()) {
        Firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$store.commit("setUser", { user });
            this.$router.replace("write");
          })
          .catch(error => {
            this.error = error;
            this.dialog = true;
          });
      }
    },
    abort: function() {
      this.$router.replace("/");
    }
  }
};
</script>

<style>
</style>

<template>
  <h1>Logging out</h1>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "LogOut",
  mounted() {
    let that = this;
    Firebase.auth()
      .signOut()
      .then(function() {
        that.$store.commit("notLoggedIn");
        setTimeout(() => {
          that.$router.push("/");
        }, 1500);
      })
      .catch(function(error) {
        console.log("error signing out", error); // An error happened.
      });
  }
};
</script>

<style>
</style>

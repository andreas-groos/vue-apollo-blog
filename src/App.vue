<template>
  <div id="app">
    <v-app>
      <Sidebar></Sidebar>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "App",
  components: { Sidebar }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  text-align: center;
  a {
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 3px;
    &.router-link-exact-active {
      color: #42b983;
      background: #42b983;
      padding: 5px 0;
    }
  }
}
</style>

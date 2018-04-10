<template>
  <!-- <v-card class="d-inline-block pa-5"> -->
  <v-navigation-drawer id="nav"
                       app
                       dark
                       permanent
                       floating
                       width="200"
                       v-model="drawer">
    <v-list>
      <v-list-tile v-for="item in items"
                   :key="item.title"
                   @click="">
        <router-link :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
// import Home from "@/views/Home.vue";
// import Write from "@/views/Write.vue";
// import Settings from "@/views/Settings.vue";
// import About from "@/views/About.vue";

export default {
  name: "Sidebar",
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "home",
          title: "Home",
          route: "/"
        },

        {
          icon: "edit",
          title: "Write",
          route: "/write"
        },
        {
          icon: "settings",
          title: "Settings",
          route: "/settings"
        },
        {
          icon: "star",
          title: "About",
          route: "/about"
        }
      ]
    };
  }
};
</script>

<style>
.list__tile__action {
  display: inline;
}
</style>

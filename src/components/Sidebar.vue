<template>
  <!-- <v-card class="d-inline-block pa-5"> -->
  <v-navigation-drawer id="nav"
                       app
                       mini-variant
                       dark
                       permanent
                       width="200">

    <v-list>
      <v-list-tile v-for="item in userIcon"
                   :key="item.title">
        <router-link :to="item.route">
          <v-list-tile-action>
            <v-icon color="whitesmoke">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <!-- <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content> -->
        </router-link>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      drawer: true,
      mini: true,
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
          icon: "info",
          title: "About",
          route: "/about"
        },

        {
          icon: "account_box",
          title: "Account",
          route: "/sign-in"
        }
      ]
    };
  },
  computed: {
    ...mapState(["user"]),
    userIcon: function() {
      // let user = this.$store.getters.getUser;
      let newItems = [...this.items];
      if (this.user) {
        newItems[4].icon = "fa-sign-out-alt";
        newItems[4].route = "/sign-out";
      }
      return newItems;
    }
  }
};
</script>

<style>
.list__tile__action {
  display: inline;
}
</style>

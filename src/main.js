import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloClient from "./apollo";
import VueApollo from "vue-apollo";
import Vuetify from "vuetify";

import "./registerServiceWorker";

import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(Vuetify, {
  theme: {
    primary: "#42b983",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount("#app");

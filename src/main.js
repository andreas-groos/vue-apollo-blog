import apolloClient from "./apollo";
import App from "./App.vue";
import Firebase from "firebase";
import router from "./router";
import store from "./store";
import Vue from "vue";
import VueApollo from "vue-apollo";
import Vuetify from "vuetify";

import "./registerServiceWorker";

import "vuetify/dist/vuetify.min.css";

// Firebase config
var config = {
  apiKey: "AIzaSyBGYDTIaYTS0lkfzttGtc6ciDBjT6jxcFk",
  authDomain: "vue-blog-e81c3.firebaseapp.com",
  databaseURL: "https://vue-blog-e81c3.firebaseio.com",
  projectId: "vue-blog-e81c3",
  storageBucket: "vue-blog-e81c3.appspot.com",
  messagingSenderId: "848077154006"
};
Firebase.initializeApp(config);

Vue.config.productionTip = false;

// Apollo setup
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

// protected routes
router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("/sign-in");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

Firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    provide: apolloProvider.provide(),
    render: h => h(App)
  }).$mount("#app");
});

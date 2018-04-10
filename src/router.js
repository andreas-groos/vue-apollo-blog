import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlogPost from "./components/Blogpost.vue";
import About from "./views/About.vue";
import Write from "./views/Write.vue";
import Settings from "./views/Settings.vue";
import FourOFour from "./components/FourOFour.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post/:id",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/write",
      name: "write",
      component: Write
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      name: "404",
      component: FourOFour
    }
  ]
});

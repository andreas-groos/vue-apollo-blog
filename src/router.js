import About from "./views/About.vue";
import BlogPost from "./components/Blogpost.vue";
import FourOFour from "./components/FourOFour.vue";
import Home from "./views/Home.vue";
import LogOut from "./components/LogOut.vue";
import Router from "vue-router";
import Settings from "./views/Settings.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import Vue from "vue";
import Write from "./views/Write.vue";

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
      component: Write,
      meta: { requiresAuth: true }
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      meta: { requiresAuth: true }
      // FIXME: when starting on /settings the route get's denied before firebase can esatblish user status
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/log-out",
      name: "log-out",
      component: LogOut
    },
    {
      path: "*",
      name: "404",
      component: FourOFour
    }
  ],
  mode: "history"
});

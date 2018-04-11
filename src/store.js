import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { user: null },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    notLoggedIn: state => {
      state.user = null;
    }
  },
  actions: {},
  getters: {
    getUser: state => state.user
  }
});

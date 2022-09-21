import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import toast from "./modules/toastMessage";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedPaths = createPersistedState({
  paths: ["auth", "users"],
});

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    users,
    toast,
  },
  plugins: [persistedPaths],
});

import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const state = {
  user: null,
  isAuthenticated: false,
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
    state.isAuthenticated = true;
    console.log("user state changed:", state.user);
  },
};

const actions = {
  async signup(context, { email, password }) {
    console.log("signup action");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("SET_USER", res.user);
    } else {
      throw new Error("could not complete signup");
    }
  },

  async login(context, { email, password }) {
    console.log("login action");
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("SET_USER", res.user);
    } else {
      throw new Error("could not complete login");
    }
  },

  async logout() {
    console.log("logout action");

    await signOut(auth);
    // context.commit("SET_USER", null);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

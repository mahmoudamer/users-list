import Vue from "vue";

// local state
const state = {
  toBeEditedUser: {},
  toBeDeletedId: null,
  data: [
    {
      id: 1,
      name: "Oleg 1 ",
      email: "mah@gmail.com",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5DEB/production/_126034042_gettyimages-1240422158.jpg",
      role: "admin",
    },
    {
      id: 2,
      name: "Oleg 2",
      email: "mah@gmail.com",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5DEB/production/_126034042_gettyimages-1240422158.jpg",
      role: "admin",
    },
    {
      id: 3,
      name: "Oleg 3",
      email: "mah@gmail.com",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5DEB/production/_126034042_gettyimages-1240422158.jpg",
      role: "admin",
    },
    {
      id: 4,
      name: "Oleg 4",
      email: "mah@gmail.com",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5DEB/production/_126034042_gettyimages-1240422158.jpg",
      role: "admin",
    },
  ],
};

const getters = {
  sortedByName: (state) => {
    return state.users.sort((a, b) => a.name < b.name);
  },
};

const mutations = {
  SET_EDITED_USER(state, user) {
    state.toBeEditedUser = { ...user };
    state = { ...state };
  },

  SET_DELETED_ID(state, toBeDeletedId) {
    state.toBeDeletedId = toBeDeletedId;
    state = { ...state };
  },

  ADD_USER(state, user) {
    let lastId = state.data.length + 1;
    state.data.push({
      id: lastId,
      ...user,
    });
  },

  DELETE_USER(state, userId) {
    const ind = state.data.findIndex((user) => user.id === state.toBeDeletedId);
    console.log(ind, userId, state, state.toBeDeletedId);
    if (ind !== -1) {
      state.data.splice(ind, 1);
    }
  },

  EDIT_USER(state, userData) {
    const ind = state.data.findIndex((user) => user.id === userData.id);

    if (ind !== -1) {
      const updatedUser = {
        ...userData,
      };
      console.log(ind, " ind edit user ", updatedUser, userData);
      Vue.set(state.data, ind, updatedUser);
    }
  },
};

const actions = {
  addUser({ commit }, data) {
    commit("ADD_USER", data);
  },

  deleteUser({ commit }, userId) {
    commit("DELETE_USER", userId);
  },

  editUser({ commit }, data) {
    commit("EDIT_USER", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

const state = {
  showToast: false,
  message: null,
};

const getters = {
  sortedByName: (state) => {
    return state.users.sort((a, b) => a.name < b.name);
  },
};

const mutations = {
  ADD_USER(state, user) {
    state.users.push({
      name: user.name,
      age: user.age,
    });
  },
};

const actions = {
  // first param is context object
  addUser({ state, commit, rootState }, data) {
    console.log(state, rootState);
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("ADD_USER", data);
        resolve();
      }, 250);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

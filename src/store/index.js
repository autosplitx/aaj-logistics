import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import user from "./modules/user";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = { auth: auth, user: user };

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [createPersistedState()],
});

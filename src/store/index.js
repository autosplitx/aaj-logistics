import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import location from "./modules/location";

// const state = {};
// const actions = {};
// const mutations = {};
// const getters = {};

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

const modules = { auth: auth, location: location };

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [createPersistedState()],
});

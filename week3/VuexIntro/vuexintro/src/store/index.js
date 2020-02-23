import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  //syncronous
  mutations: {
    increment: (state, value) => (state.counter += value)
  },
  // asyncronous
  actions: {
    incrementA: ({ commit }, value) => commit("increment", value)
  },
  getters: {
    counter: state => state.counter
  },
  namespaced: true,
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import { RedditModule } from "@/modules/RedditModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  //syncronous
  mutations: {
    increment: (state, value) => (state.counter += value),
    setCounter: (state, value) => (state.counter = value)
  },
  // asyncronous
  actions: {
    incrementA: ({ commit }, value) => commit("increment", value),
    setCounter: ({ commit }, value) => commit("setCounter", value)
  },
  getters: {
    counter: state => state.counter
  },
  namespaced: true,
  modules: {
    r: RedditModule
  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: {},
    answers: {},
    score: 0
  },
  mutations: {
    initQuestions(state, payload) {
      state.questions = payload;
    },
    updateScore(state) {
      state.score += 1;
    },
    clearScore(state) {
      state.score = 0;
    }
  },
  actions: {
    initQuestions({ commit }, questions) {
      commit("initQuestions", questions);
    },
    updateScore({ commit }) {
      commit("updateScore");
    },
    clearScore({ commit }) {
      commit("clearScore");
    }
  },
  getters: {
    getNumOfQuestions(state) {
      return state.questions.length;
    },
    getQuestion: state => id => state.questions[id - 1],
    getScore: state => state.score
  },
  modules: {}
});

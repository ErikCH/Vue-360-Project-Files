import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    error: "",
    loading: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    login(_, { email, password }) {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    createUser(_, { email, password }) {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    logOut() {
      return firebase.auth().signOut();
    }
  },
  getters: {
    getUser: state => state.user,
    getLoading: state => state.loading
  },
  modules: {}
});

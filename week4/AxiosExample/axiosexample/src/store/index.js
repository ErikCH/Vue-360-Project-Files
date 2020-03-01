import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    //syncronous
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    //asyncronous
    setUsers({ commit }) {
      Vue.prototype.$http
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          console.log(res);
          commit("setUsers", res.data);
        });
    }
  },
  getters: {
    getUsers: state => state.users
  },
  modules: {}
});

export const RedditModule = {
  namespaced: true,
  state: {
    links: ["https://www.cnn.com"]
  },
  mutations: {
    mutateLinks(state, value) {
      this.state.r.links = value;
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch("https://www.reddit.com/r/pics.json");
        const json = await res.json();
        commit("mutateLinks", json.data.children); // -> 'r/mutateLinks'
        commit("setCounter", json.data.children.length, { root: true }); // -> 'setCounter action'
        console.log(json.data.children);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getLinks(state) {
      return state.links;
    }
  }
};

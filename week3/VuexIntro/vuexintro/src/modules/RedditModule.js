export const RedditModule = {
  namespaced: true,
  state: {
    links: ["https://www.cnn.com"]
  },
  mutations: {
    mutateLinks(state, value) {
      state.links = value;
    }
  },
  actions: {
    async fetchData({ commit, dispatch }) {
      try {
        const res = await fetch("https://www.reddit.com/r/pics.json");
        const json = await res.json();
        commit("mutateLinks", json.data.children); // -> 'r/mutateLinks'
        dispatch("setCounter", json.data.children.length, { root: true }); // -> 'setCounter action'
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

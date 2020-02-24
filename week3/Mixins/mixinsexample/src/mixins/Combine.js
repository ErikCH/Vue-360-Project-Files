export const Combine = {
  data() {
    return {
      name: "Erik Hanchett"
    };
  },
  computed: {
    getInfo() {
      return this.name.length;
    }
  }
};

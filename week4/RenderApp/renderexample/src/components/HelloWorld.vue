<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      names: ["Erik", "Susan", "Vivian"]
    };
  },
  props: {
    tag: String
  },
  render(createElement) {
    return createElement("div", {}, [
      createElement(
        this.tag,
        {
          attrs: {
            class: "header"
          },
          style: {
            fontSize: "22px"
          }
        },
        "Hello World"
      ),
      createElement(
        "ul",
        {},
        this.names.map(name => createElement("li", {}, `${name}`))
      )
    ]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  color: blue;
}
</style>

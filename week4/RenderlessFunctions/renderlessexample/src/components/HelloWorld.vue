<script>
export default {
  name: "HelloWorld",
  props: {
    tag: String
  },
  render() {
    // console.log(
    return this.$scopedSlots.default({
      info: "Scoped"
    });
    // );
    // return createElement(this.tag, {}, [
    // this.$scopedSlots.default({
    // info: "Scoped"
    // })
    // ]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
export default {
  data() {
    return {
      lightColor: "Green"
    };
  },
  methods: {
    setGreen() {
      this.lightColor = "Green";
    },
    setYellow() {
      this.lightColor = "Yellow";
    },
    setRed() {
      this.lightColor = "Red";
    }
  },
  render() {
    return this.$scopedSlots.default({
      on: this.lightColor,
      setGreen: this.setGreen,
      setYellow: this.setYellow,
      setRed: this.setRed
    });
  }
};
</script>

<style scoped></style>

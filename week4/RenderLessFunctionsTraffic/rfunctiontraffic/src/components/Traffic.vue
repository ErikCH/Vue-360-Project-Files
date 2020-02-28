<script>
export default {
  data() {
    return {
      lightColor: "Green"
    };
  },
  render() {
    return this.$scopedSlots.default({
      on: this.lightColor,
      setGreen: this.setGreen,
      setYellow: this.setYellow,
      setRed: this.setRed
    });
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
  }
};
</script>

<style scoped></style>

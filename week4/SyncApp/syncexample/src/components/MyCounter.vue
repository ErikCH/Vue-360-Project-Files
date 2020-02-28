<template>
  <div>
    <h3>child {{ counter }}</h3>
    <button @click="clicked()">Press Me</button>
    <h3>passed in parent counter {{ parentCounter }}</h3>
  </div>
</template>

<script>
export default {
  props: ["parentCounter"],
  methods: {
    clicked() {
      this.counter++;
      this.$emit("update:parentCounter", this.parentCounter + 1);
    }
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style scoped></style>

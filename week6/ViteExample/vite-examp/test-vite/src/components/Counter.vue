<template>
  <div>
    <h3>Hello World</h3>
    <button @click="increment">Press Me</button>
    {{ counter }}
  </div>
</template>

<script>
import { ref } from "vue";
import { counter, increment } from "/src/composables/useCounter.js";
export default {
  setup() {
    return {
      counter,
      increment
    };
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: purple;
}
</style>

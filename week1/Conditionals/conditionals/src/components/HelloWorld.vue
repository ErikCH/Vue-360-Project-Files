<template>
  <div>
    <h1>Conditional v-if, v-else, v-else-if</h1>
    <h3>{{ counter }}</h3>
    <div v-if="checkForEvenOdd()">Even</div>
    <div v-else-if="checkForText()">Text</div>
    <div v-else>Odd</div>

    <button @click="counter++">Press Me</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    checkForEvenOdd() {
      return this.counter % 2 === 0;
    },
    checkForText() {
      return (
        typeof this.counter === "string" ||
        this.counter instanceof String
      );
    }
  },
  data() {
    return {
      counter: 1
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

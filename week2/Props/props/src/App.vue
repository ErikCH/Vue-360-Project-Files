<template>
  <div id="app">
    <MyData></MyData>
    <button @click="myNumber++">Press Me</button>
  </div>
</template>

<script>
import MyData from "./components/MyData.vue";

export default {
  name: "App",
  data() {
    return {
      myNumber: 123
    };
  },
  components: {
    MyData
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

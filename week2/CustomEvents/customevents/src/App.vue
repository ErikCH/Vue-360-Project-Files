<template>
  <div id="app">
    <List v-model="fruits" @ev="change()" :items="fruits" />
    <h3>This is the Parent Fruits Array {{ fruits }}</h3>
  </div>
</template>

<script>
import List from "./components/List.vue";
export default {
  name: "App",
  components: { List },
  data() {
    return {
      fruits: ["apple", "strawberry", "bannana"],
      fruit: "bobby"
    };
  },
  methods: {
    change() {
      this.fruits.push(this.fruit);
    }
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

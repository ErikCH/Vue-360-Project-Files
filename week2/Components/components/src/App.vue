<template>
  <div id="app">
    <Header></Header>
    <h3>This is the main content</h3>
    <this-info></this-info>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SomeInfo from "./components/SomeInfo.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    "this-info": SomeInfo
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

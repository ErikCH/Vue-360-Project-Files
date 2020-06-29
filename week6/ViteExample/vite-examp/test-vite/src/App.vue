<template>
  <!-- <Counter /> -->
  <router-link to="/">Home</router-link>
  <router-link to="/contact">Contact</router-link>
  <router-view></router-view>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter
  }
};
</script>

<template>
  <div id="app">
    <div
      class="spinner flex h-screen bg-gray-300 opacity-25 absolute w-screen z-0"
      v-if="getLoading"
    ></div>
    <pulse-loader
      :loading="getLoading"
      :color="'green'"
      class="flex justify-center items-center w-screen z-10 absolute h-screen"
    ></pulse-loader>
    <Header class="m-4"></Header>
    <router-view class="p-5" />
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    PulseLoader
  },
  computed: {
    ...mapGetters(["getLoading"])
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

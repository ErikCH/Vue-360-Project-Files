<template>
  <div id="app">
    <div v-if="error">Error Loading Component</div>
    <Suspense v-else>
      <template #default>
        <User />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import User from "@/components/User.vue";
import { ref, onErrorCaptured } from "vue";
export default {
  name: "App",
  components: {
    User
  },
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
      console.log("test");
      return true;
    });

    return {
      error
    };
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

<template>
  <div class="home">
    <h3>My Home</h3>
    <button @click="show = !show">Show List</button>
    <div v-if="show">
      <List />
    </div>
  </div>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
const List = () => ({
  component: import(/* webpackChunkName: "list" */ "@/components/List"),
  loading: LoadingComponent,
  error: ErrorComponent,
  timeout: 500
});
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    // List: () => import(/* webpackChunkName: "list" */ "@/components/List");
    List
  }
};
</script>

<style scoped>
.home {
  border: 1px red solid;
}
</style>
<template>
  <div>
    <h1>User</h1>
    <h3>{{ name }}</h3>
    <h4>{{ getInfo }}</h4>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { Combine } from "@/mixins/Combine";
export default {
  mixins: [Combine],
  data() {
    return {
      name: "Bob Hanchett"
    };
  }
  //   computed: {
  //     getInfo() {
  //       return this.name.length;
  //     }
  //   }
};
</script>

<style scoped></style>

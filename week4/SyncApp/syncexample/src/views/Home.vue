<template>
  <div class="home">
    <h3>Parent:{{ counter }}</h3>

    <MyCounter :parentCounter.sync="counter" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyCounter from "@/components/MyCounter.vue";

export default {
  name: "Home",
  components: {
    MyCounter
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>

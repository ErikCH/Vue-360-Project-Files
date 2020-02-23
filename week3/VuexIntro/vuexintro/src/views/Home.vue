<template>
  <div class="home">
    <h3>Counter Value:</h3>
    <span>{{ counter }}</span>
    <br />
    <button @click="increment(50)">Increment</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["counter"])
    // ...mapState(["counter"])
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    ...mapActions(["incrementA"]),
    ...mapMutations(["increment"])
  }
};
</script>

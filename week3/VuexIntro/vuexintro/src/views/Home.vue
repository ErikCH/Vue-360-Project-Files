<template>
  <div class="home">
    <h3>Counter Value:</h3>
    <span>{{ counter }}</span>
    <br />
    <button @click="increment(50)">Increment</button>
    <button @click="fetchData">Fetch Data</button>
    <!-- <h4>{{ getLinks }}</h4> -->
    <div v-for="(link, idx) in getLinks" :key="idx">
      <img
        v-if="link.data && link.data.url"
        style="width: 25%"
        :src="link.data.url"
        alt
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["counter"]),
    ...mapGetters("r", {
      getLinks: "getLinks"
    })
    // ...mapState(["counter"])
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    ...mapActions({
      incrementA: "incrementA",
      fetchData: "r/fetchData"
    }),
    ...mapMutations(["increment"])
    // fetchData() {
    //   this.$store.dispatch("r/fetchData");
    //   // console.log("got back", this.$store.getters["r/getLinks"]);
    // }
  }
};
</script>

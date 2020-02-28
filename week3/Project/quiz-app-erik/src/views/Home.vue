<template>
  <div class="flex justify-center items-center screen">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-2xl text-white
     font-bold py-2 px-4 border border-blue-700 rounded h-24 w-24"
      @click="$router.push('/intro')"
    >
      Start
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["clearScore"])
  },
  components: {},
  created() {
    this.clearScore();
  }
};
</script>
<style lang="scss" scoped>
.screen {
  height: 400px;
}
</style>

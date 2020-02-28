<template>
  <div class="flex text-4xl justify-center items-center flex-col">
    <span>Congrats! Here are your results!</span>
    <div>You got {{ getScore }} out of {{ getNumOfQuestions }}</div>
    <button
      class="
     text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded w-64 hover:bg-blue-500 hover:text-white hover:border-transparent"
      @click="$router.push('/')"
    >
      Start Over
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNumOfQuestions", "getScore"])
  }
};
</script>

<style lang="scss" scoped></style>

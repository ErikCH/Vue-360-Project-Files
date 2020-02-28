<template>
  <div>
    <div class="m-16 flex justify-center flex-col items-center">
      <h1 class="text-3xl text-brown-400">Welcome to the movie app!</h1>
      <p>Make sure to answer every question fully!</p>
      <p>You'll be working on {{ getNumOfQuestions }}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-2 px-4 border border-blue-700 rounded h-24 w-24 mt-16"
        @click="$router.push('/questions/1')"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNumOfQuestions"])
  }
};
</script>

<style lang="scss" scoped></style>

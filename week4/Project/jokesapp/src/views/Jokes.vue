<template>
  <div class="w-full flex justify-center flex-col items-center">
    <button
      @click="addJoke"
      class="
    font-bold py-2 px-4 rounded bg-blue-500 text-white"
    >
      Add Joke
    </button>
    <transition-group name="fade" class="w-full">
      <div
        class="bg-white rounded-lg p-6 flex justify-center shadow-2xl h-24 max-w-2xl m-4 w-2/3 max-w-4xl mx-auto"
        v-for="(joke, idx) in jokes"
        :key="idx"
      >
        <div>
          <h2 class="text-lg">{{ joke.data }}</h2>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import { JokesModel } from "@/models/jokes.model";
import axios, { AxiosResponse } from "axios";

export default Vue.extend({
  data() {
    return {
      jokes: new Array<AxiosResponse<JokesModel>>(),
      joke: {} as AxiosResponse<JokesModel>
    };
  },
  methods: {
    ...mapMutations(["SET_ERROR"]),
    async addJoke() {
      try {
        const config = {
          headers: {
            Accept: "text/plain"
          }
        };
        const joke = await axios.get<JokesModel>(
          "https://icanhazdadjoke.com/",
          config
        );
        if (this.jokes.length > 3) {
          this.jokes = [];
        }
        this.jokes.push(joke);
      } catch (e) {
        this.SET_ERROR(e);
      }
    }
  },
  created() {
    this.addJoke();
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

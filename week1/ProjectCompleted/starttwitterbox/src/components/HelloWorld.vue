<template>
  <div>
    <h1 class="text-2xl mb-10">Project Twitter Box Client</h1>

    <div
      class="w-4/12 h-32 shadow-xl bg-gray-200 mx-auto flex flex-col justify-center items-center"
    >
      <div class="flex items-center justify-center">
        <textarea
          v-model="tweet"
          type="text"
          class="w-64 h-20 p-4"
          :maxlength="characters"
        />
        <button
          @click="addTweet"
          class="bg-blue-400 rounded-md w-20 text-white h-12 disabled:opacity-75"
          :disabled="!maxC"
        >
          Submit
        </button>
      </div>
      <div :class="{ 'text-red-600': !maxC }">
        characters remaining {{ maxC }}
      </div>
    </div>
    <div
      class="my-10 w-4/12 h-32 shadow-xl bg-gray-200 mx-auto flex flex-col justify-center items-center break-all"
      v-for="(tweet, idx) in tweets"
      :key="idx"
    >
      {{ tweet }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      maxCharacters: "",
      characters: 280,
      tweets: [],
      tweet: ""
    };
  },
  methods: {
    addTweet() {
      this.tweets.push(this.tweet);
      this.tweet = "";
    }
  },
  computed: {
    maxC() {
      return this.characters - this.tweet.length;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  /* width: 33%;
  background-color: #b8dcdc;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04); */
}
button {
  margin-left: 10px;
}
</style>

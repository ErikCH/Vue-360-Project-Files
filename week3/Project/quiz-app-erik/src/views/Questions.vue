<template>
  <Layout
    :title="getQuestion(page).question"
    :getScore="getScore"
    :page="page"
    :getNumOfQuestions="getNumOfQuestions"
  >
    <transition name="fade">
      <QuestionBlock
        v-if="animate"
        :questions="getQuestion(page)"
        :selected.sync="selected"
        :error="error"
      ></QuestionBlock>
    </transition>

    <div v-if="!checkAnswerClicked">
      <button
        class="text-2xl bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"
        @click="checkAnswer(selected, getQuestion(page).answer)"
      >
        Check Answer
      </button>
    </div>
    <div v-else>
      <button
        class="text-2xl bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"
        @click="next()"
      >
        Next
      </button>
    </div>
  </Layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Layout from "@/components/Layout.vue";
import QuestionBlock from "@/components/QuestionBlock.vue";
export default {
  components: {
    Layout,
    QuestionBlock
  },
  data() {
    return {
      selected: "",
      error: false,
      checkAnswerClicked: false,
      animate: true
    };
  },
  methods: {
    ...mapActions(["updateScore"]),
    next() {
      this.animate = false;
      this.goToNext();
    },

    checkAnswer(selected, answer) {
      this.checkAnswerClicked = true;
      if (selected === answer) {
        this.updateScore();
      } else {
        this.error = true;
      }
    },
    goToNext() {
      const nextRoute = parseInt(this.$route.params.id) + 1;
      this.$router.push(
        `${
          nextRoute > this.getNumOfQuestions
            ? "/results"
            : "/questions/" + nextRoute
        }`
      );
    }
  },
  computed: {
    ...mapGetters(["getQuestion", "getNumOfQuestions", "getScore"]),
    page() {
      return this.$route.params.id;
    }
  },
  watch: {
    $route(to, from) {
      console.log("to", to);
      console.log("from", from);
      this.error = "";
      this.selected = "";
      this.checkAnswerClicked = false;
      setTimeout(() => {
        this.animate = true;
      }, 400);
    }
  }
};
</script>

<style lang="scss" scoped>
.items {
  margin: 5px 0;
  padding: 5px;
}
.error {
  background-color: red !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

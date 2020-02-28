<template>
  <div id="app" class="bg-gray-100 h-screen">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { Questions } from "@/assets/questions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch("initQuestions", Questions);
  }
};
</script>

<style lang="scss"></style>

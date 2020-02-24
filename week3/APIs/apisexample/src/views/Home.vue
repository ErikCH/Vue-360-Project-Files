<template>
  <div class="home">
    <Comp1 ref="comp" />
    <button @click="hide">Hide</button>
    <input type="text" ref="inputInfo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Comp1 from "@/components/Comp1.vue";

export default {
  name: "Home",
  components: {
    Comp1
  },
  methods: {
    hide() {
      // console.log(this.$refs.comp);
      this.$refs.comp.showMe = !this.$refs.comp.showMe;
      this.$refs.inputInfo.value = "Clicked";
      console.log("el", this.$el);
    }
  }
};
</script>

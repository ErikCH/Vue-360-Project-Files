<template>
  <div class="home">
    <Info />
    <button @click="compName = 'Comp2'">Comp2</button>
    <button @click="compName = 'Comp1'">Comp1</button>
    <keep-alive>
      <component :is="compName" />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info.vue";
import Comp1 from "@/components/Comp1.vue";
import Comp2 from "@/components/Comp2.vue";

export default {
  name: "Home",
  data() {
    return {
      compName: "Comp1"
    };
  },
  components: {
    Info,
    Comp1,
    Comp2
  }
};
</script>

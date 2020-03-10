<template>
  <div class="home">
    <h3>{{count}}</h3>
    <h4>computed {{cc}}</h4>
    <button @click="counter">count</button>
    <User name="John" />
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs, computed, watch } from "@vue/composition-api";
import User from "@/components/User.vue";

export default {
  name: "Home",
  components: { User },
  setup() {
    /**
    Data Object
     */
    let c = reactive({
      count: 0,
      counter: () => {
        c.count++;
      },
      cc: computed(() => {
        return c.count + 1;
      })
    });

    const w = watch(
      () => c.count,
      (current, prev) => {
        console.log("current", current);
        console.log("prev", prev);
      }
    );

    // const cc = computed(() => {
    //   return c.count + 1;
    // });

    // let counter = ref(0);
    /**
    methods
     */
    // function count() {
    //   counter.value++;
    // }
    return {
      ...toRefs(c),
      w
    };
  }
};
</script>

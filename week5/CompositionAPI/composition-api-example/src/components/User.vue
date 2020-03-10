<template>
  <div>
    <h3>Hello From User</h3>
    {{n}}
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  props: ["name"],
  setup(props, context) {
    console.log("props", props);
    console.log("context", context);
    const n = computed(() => {
      return `Name: ${props.name}`;
    });
    return {
      n
    };
  }
};
</script>

<style scoped>
</style>
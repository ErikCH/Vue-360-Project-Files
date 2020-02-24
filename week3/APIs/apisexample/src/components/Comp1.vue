<template>
  <div>
    <h3 v-if="showMe">Comp1 Info</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMe: true
    };
  }
};
</script>

<style scoped></style>

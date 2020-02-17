<template>
  <div>
    <div class="child">
      <h3>Child Component</h3>
      <h3>{{ data }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Number,
      default: 100
    }
  }
};
</script>

<style scoped>
.child {
  border: 1px solid red;
}
</style>

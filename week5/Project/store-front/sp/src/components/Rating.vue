<template>
  <div class="rating">
    <span
      v-bind:class="{ 'rating-active': checkRating(n, product) }"
      v-for="n in 5"
      :key="n"
      >☆</span
    >
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    }
  }
};
</script>

<style scoped></style>

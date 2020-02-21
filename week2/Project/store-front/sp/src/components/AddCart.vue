<template>
  <div>
    <button
      class="btn btn-primary btn-lg"
      v-on:click="addToCart(product)"
      v-if="canAddToCart(product)"
    >
      Add to cart
    </button>
    <button disabled="true" class="btn btn-primary btn-lg" v-else>
      Add to cart
    </button>
    <span
      class="inventory-message"
      v-if="product.availableInventory - cartCount(product.id) === 0"
      key="0"
      >All Out!</span
    >
    <span
      class="inventory-message"
      v-else-if="product.availableInventory - cartCount(product.id) < 5"
      key
    >
      Only
      {{ product.availableInventory - cartCount(product.id) }} left!
    </span>
    <span class="inventory-message" v-else key>Buy Now!</span>
  </div>
</template>

<script>
export default {
  props: ["product", "cart"],
  methods: {
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  }
};
</script>

<style scoped></style>

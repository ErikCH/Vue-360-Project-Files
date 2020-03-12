<template>
  <div>
    <button
      class="btn btn-primary btn-lg"
      v-on:click="addToCart(product, cart)"
      v-if="canAddToCart(product, cart)"
    >
      Add to cart
    </button>
    <button disabled="true" class="btn btn-primary btn-lg" v-else>
      Add to cart
    </button>
    <span
      class="inventory-message"
      v-if="product.availableInventory - cartCount(product.id, cart) === 0"
      key="0"
      >All Out!</span
    >
    <span
      class="inventory-message"
      v-else-if="product.availableInventory - cartCount(product.id, cart) < 5"
      key
    >
      Only
      {{ product.availableInventory - cartCount(product.id, cart) }} left!
    </span>
    <span class="inventory-message" v-else key>Buy Now!</span>
  </div>
</template>

<script>
import useCart from "@/composables/useCart";
export default {
  props: ["product", "cart"],
  setup() {
    const { addToCart, canAddToCart, cartCount } = useCart();
    return {
      addToCart,
      canAddToCart,
      cartCount
    };
  }
};
</script>

<style scoped></style>

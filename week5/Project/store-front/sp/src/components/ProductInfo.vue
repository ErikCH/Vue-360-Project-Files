<template>
  <div>
    <div class="row list">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" />
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <slot name="title"></slot>
        <p v-html="product.description"></p>
        <p class="price">
          {{ product.price }}
        </p>
        <slot name="extra"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style scoped>
.list {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 30px;
}
</style>

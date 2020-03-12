<template>
  <div>
    <my-header></my-header>
    <h1>This is the id {{ $route.params.id }}</h1>
    <ProductInfo :product="product">
      <template v-slot:title>
        <h1>{{ product.title }}</h1>
      </template>
    </ProductInfo>
    <button @click="edit($router)">Edit Product</button>
    <router-view></router-view>
  </div>
</template>
<script>
import MyHeader from "@/components/Header.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import useProduct from "@/composables/useProduct";
export default {
  components: { MyHeader, ProductInfo },
  setup(props, { root: { $route } }) {
    const { product, edit } = useProduct($route);
    return {
      product,
      edit
    };
  }
};
</script>
<style scoped>
.list {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>

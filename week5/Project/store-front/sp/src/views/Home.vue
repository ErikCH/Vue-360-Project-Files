<template>
  <div>
    <my-header></my-header>
    <main>
      <div v-for="product in products" :key="product.id">
        <ProductInfo :product="product">
          <template v-slot:title>
            <router-link
              class="link"
              tag="h1"
              :to="{ name: 'Id', params: { id: product.id } }"
              >{{ product.title }}</router-link
            >
          </template>
          <template v-slot:extra>
            <div class="extra">
              <AddCart :product="product" :cart="cart"></AddCart>
              <Rating :product="product"></Rating>
            </div>
          </template>
        </ProductInfo>
      </div>
    </main>
  </div>
</template>
<script>
import MyHeader from "@/components/Header.vue";
import AddCart from "@/components/AddCart.vue";
import Rating from "@/components/Rating.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import useProduct from "@/composables/useProduct";

export default {
  name: "Home",
  setup(_, { root: { $route } }) {
    const { products, cart } = useProduct($route);
    return {
      products,
      cart
    };
  },
  components: { MyHeader, ProductInfo, AddCart, Rating }
};
</script>

<style scoped>
.items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.link:hover {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
.images {
  max-width: 40%;
}
figure {
  display: flex;

  flex-direction: column;
}
.list {
  /* border: 1px solid black; */
  margin: 10px auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
.extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

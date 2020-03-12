import { ref } from "@vue/composition-api";
import { Products } from "@/assets/products";
export default function($route) {
  let product = ref(null);
  let products = ref(null);
  const cart = ref([]);

  products.value = Products;
  product.value = Products.filter(data => data.id == $route.params.id)[0];

  const edit = $router => $router.push({ name: "Edit" });

  return {
    edit,
    product,
    products,
    cart
  };
}

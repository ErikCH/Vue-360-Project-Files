import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router.esm";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/contact",
      component: Contact
    }
  ]
});

export default router;

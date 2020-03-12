import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/product/:id",
    name: "Id",
    component: () =>
      import(/* webpackChunkName: "product" */ "@/views/Product"),
    props: true,
    children: [
      {
        path: "edit",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "edit-product" */ "@/views/EditProduct"),
        props: true
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

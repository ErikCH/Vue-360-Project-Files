import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/intro",
    name: "Intro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Intro.vue")
  },
  {
    path: "/questions/:id",
    name: "Questions",
    component: () =>
      import(/* webpackChunkName: "questions" */ "../views/Questions.vue")
  },
  {
    path: "/results",
    name: "Results",
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/Results.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import App from "./App.vue";
import VueTailwind from "vue-tailwind";
Vue.use(VueTailwind);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

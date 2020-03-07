import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyACfvaS_5M5cDEYgi1vcPCjVVr_YqxhnDs",
  authDomain: "app-4c79b.firebaseapp.com",
  databaseURL: "https://app-4c79b.firebaseio.com",
  projectId: "app-4c79b",
  storageBucket: "app-4c79b.appspot.com",
  messagingSenderId: "852653448080",
  appId: "1:852653448080:web:202061d4c1b90bb53a3115"
};

let app: {};

firebase.initializeApp(firebaseConfig);

store.commit("SET_LOADING", true);
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    store.commit("SET_USER", user);
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
  store.commit("SET_USER", user);
  store.commit("SET_LOADING", false);
});

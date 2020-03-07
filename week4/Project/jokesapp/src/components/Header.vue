<template>
  <div>
    <ul class="flex border-b">
      <li class="-mb-px mr-1">
        <router-link
          to="/home"
          class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold"
          active-class="border-l border-t border-r rounded-t"
        >Home</router-link>
      </li>
      <li class="mr-1" v-if="!!getUser">
        <button
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          active-class="border-l border-t border-r rounded-t"
          @click="logout()"
        >Log out</button>
      </li>
      <li class="mr-1" v-else>
        <router-link
          to="/login"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          active-class="border-l border-t border-r rounded-t"
        >{{ loginText }}</router-link>
      </li>
      <li class="mr-1" v-if="!getUser">
        <router-link
          to="/register"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          active-class="border-l border-t border-r rounded-t"
        >Register</router-link>
      </li>
      <li class="mr-1" v-if="getUser">
        <router-link
          to="/jokes"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          active-class="border-l border-t border-r rounded-t"
        >Jokes</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["getUser"])
  },
  data() {
    return {
      loginText: "Login" as string
    };
  },
  methods: {
    async logout() {
      const { commit, dispatch } = this.$store;
      try {
        await dispatch("logOut");
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        this.$router.push("/");
      }
    }
  },
  watch: {
    $route(from, to) {
      console.log(from, to);
    }
  }
});
</script>

<style lang="scss" scoped></style>

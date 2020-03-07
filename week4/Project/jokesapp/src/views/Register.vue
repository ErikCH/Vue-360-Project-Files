<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <auth-forms
        :email.sync="email"
        :password.sync="password"
        :error="error"
        title="Enter Registration Info"
      >
        <template #pinfo>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </template>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="register()"
        >
          Register
        </button>
      </auth-forms>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AuthForms from "@/components/Auth-Forms.vue";

export default Vue.extend({
  components: {
    AuthForms
  },
  data() {
    return {
      email: "" as string,
      password: "" as string,
      error: "" as string
    };
  },
  methods: {
    async register() {
      const { dispatch, commit } = this.$store;
      const { email, password } = this;
      commit("SET_LOADING", true);
      try {
        await dispatch("createUser", { email, password });
        this.$router.push("/jokes");
      } catch (e) {
        commit("SET_ERROR", e);
        this.error = e;
      } finally {
        commit("SET_LOADING", false);
      }
    }
  }
});
</script>

<style scoped></style>

<template>
  <div class="flex flex-col justify-center items-center">
    <auth-forms
      :email.sync="email"
      :password.sync="password"
      :error="error"
      title="Login"
    >
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="login()"
      >
        Sign In
      </button>
    </auth-forms>
  </div>
</template>

<script>
import AuthForms from "@/components/Auth-Forms.vue";
export default {
  components: { AuthForms },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      const { dispatch, commit } = this.$store;
      const { email, password } = this;
      commit("SET_LOADING", true);

      try {
        await dispatch("login", { email, password });
        this.$router.push("/jokes");
      } catch (e) {
        commit("SET_ERROR", e);
        this.error = e;
      } finally {
        commit("SET_LOADING", false);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

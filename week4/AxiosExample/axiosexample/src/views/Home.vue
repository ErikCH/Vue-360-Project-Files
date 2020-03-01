<template>
  <div class="home">
    <ul>
      <li v-for="user in getUsers" :key="user.id">
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
  methods: {
    ...mapActions(["setUsers"])
  },
  components: {},
  created() {
    this.setUsers();
  }
  // created() {
  //   this.$http.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     console.log(res);
  //     this.users = res.data;
  //   });
  // }
};
</script>

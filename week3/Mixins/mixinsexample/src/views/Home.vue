<template>
  <div class="home">
    <Profile />
    <User />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import User from "@/components/User.vue";

export default {
  name: "Home",
  components: {
    Profile,
    User
  }
};
</script>

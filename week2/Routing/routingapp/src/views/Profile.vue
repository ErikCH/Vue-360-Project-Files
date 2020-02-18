<template>
  <div>
    <h3>My Profile</h3>
    <h4>{{$route.params.id}}</h4>
    <router-link :to="{name: 'Profile', query: {plan: 'private'}}">Another Route</router-link>
    <br />
    <router-link to="/profile/35/info">Info Route</router-link>
    <h5>{{$route.query}}</h5>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'Home' }">{{ sitename }}</router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      sitename: "Vue.js Pet Depot"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}

a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: black;
}
</style>

<template>
  <div class="home">
    <MyHome />
  </div>
</template>

<script>
// @ is an alias to /src
import MyHome from "@/components/MyHome.vue";

export default {
  name: "Home",
  components: {
    MyHome
  }
};
</script>

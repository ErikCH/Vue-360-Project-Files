<template>
  <div class="home">
    <HelloWorld tag="h1">
      <template v-slot="{info}">Hi From Parent {{info}}</template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

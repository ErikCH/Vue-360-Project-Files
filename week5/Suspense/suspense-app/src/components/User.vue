<template>
  <div>
    <h3>Hello From User Component</h3>
    <h5>{{user}}</h5>
  </div>
</template>

<script>
export default {
  async setup() {
    // const user = ref("erik");
    const promise = new Promise(resolve => {
      setTimeout(function() {
        resolve("Success");
      }, 2000);
    });
    const user = await promise;
    return { user };
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h3>{{ firstName }}</h3>
    <button @click="change">Click Me</button>
    <input type="text" v-model="firstName" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    change() {
      this.firstName = "John";
    }
  },
  data() {
    return {
      firstName: "Erik"
    };
  },
  watch: {
    firstName(newName, oldName) {
      console.log(`Old Name: ${oldName} New Name:${newName}`);
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

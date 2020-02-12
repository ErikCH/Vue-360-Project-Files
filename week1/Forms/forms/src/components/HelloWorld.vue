<template>
  <div>
    <h1>Forms with v-model</h1>
    <h3>{{ name }}</h3>
    <input type="text" v-model.trim="name" />
    <input v-model="checkB" type="checkbox" name="" id="" />
    {{ checkB }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      checkB: true,
      radio: true
    };
  },
  methods: {
    checkLength(event) {
      console.log(event.target.value.length);
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

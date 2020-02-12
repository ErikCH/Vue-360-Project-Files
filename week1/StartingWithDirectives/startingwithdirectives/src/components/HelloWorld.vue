<template>
  <div>
    <h1>Starting With Directives</h1>
    <!-- <h2>{{name}}</h2> -->
    <!-- <h3>{{age > 10 ? 'Older then 10' : 'Less then 10' }}</h3> -->
    <a :href="url" target="_blank">Disney</a>
    <div v-html="info"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "Erik",
      age: 35,
      url: "https://www.cnn.com",
      info: "<div><h1>From Data</h1></div>"
    };
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

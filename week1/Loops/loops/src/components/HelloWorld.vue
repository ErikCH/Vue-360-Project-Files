<template>
  <div>
    <h1>Loops with v-for</h1>
    <!-- <div v-for="n in 10" :key="n">{{ n }}</div> -->
    <!-- <div v-for="person in people" :key="person.name">
      <h3>{{ person.name }}</h3>
      <span>{{ person.age }}</span>
    </div> -->
    <div v-for="ob in obj" :key="ob.year">
      {{ ob }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      people: [
        { name: "Erik", age: "35" },
        { name: "bob", age: "42" },
        { name: "Jill", age: "47" }
      ],
      obj: { year: "1983", sign: "Gemini" }
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

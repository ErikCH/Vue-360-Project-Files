<template>
  <div>
    <h5>{{ firstName }}</h5>
    <h5>{{ lastName }}</h5>
    <p>{{ fullName }}</p>
    <button @click="change">Press Me</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      lastName: "Hanchett",
      firstName: "Erik"
    };
  },
  methods: {
    change() {
      // this.firstName = "Bob";
      this.fullName = "Billy Bob";
    }
  },
  computed: {
    fullName: {
      set(newValue) {
        const split = newValue.split(" ");
        this.firstName = split[0];
        this.lastName = split[1];
      },
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
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

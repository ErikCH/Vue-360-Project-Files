<template>
  <div>
    Directives v-on and v-show
    <!-- <h3 v-show="false">Hi</h3> -->
    <br />
    <h3>{{counter}}</h3>
    <form action>
      <input @keyup.enter="submit" type="text" />
      <button v-on:click.prevent="clicked">Submit</button>
    </form>
    <!-- <button v-on:click="clicked">Click Me</button> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0
    };
  },
  props: {
    msg: String
  },
  methods: {
    submit() {
      alert("hit enter");
    },
    clicked(event) {
      console.log(event);
      this.counter++;
    }
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

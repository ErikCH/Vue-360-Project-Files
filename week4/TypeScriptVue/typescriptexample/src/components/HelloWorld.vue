<template>
  <div>
    <h1>{{firstName}}</h1>
    <h1>{{lastName}}</h1>
    <h1>{{fullName}}</h1>
    <button @click="clicked">Click Me</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  firstName = "Erik";
  lastName = "hanchett";
  thing: number;

  clicked() {
    alert("hello world");
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
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

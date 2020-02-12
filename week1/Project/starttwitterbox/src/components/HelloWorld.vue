<template>
  <div>
    <h1>Project Twitter Box Client</h1>

    <div class="box">
      <textarea type="text" />
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 33%;
  background-color: #b8dcdc;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
button {
  margin-left: 10px;
}
</style>

<template>
  <div class="list">
    <div class="items" v-for="(item, idx) in items" :key="idx">{{ item }}</div>
    <!-- <button @click="$emit('ev')">Add Berry</button> -->
    <button @click="addBerry">Add Berry</button>
    <input type="text" v-model="fruit" />
  </div>
</template>

<script>
export default {
  props: ["items", "value"],
  data() {
    return {
      myFruits: this.value,
      fruit: ""
    };
  },
  methods: {
    addBerry() {
      this.myFruits.push(this.fruit);
      this.$emit("input", this.myFruits);
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-direction: column;
}
</style>

<template>
  <div>
    <Traffic v-slot="{ on, setGreen, setYellow, setRed }">
      <div class="traffic">
        <h3>Hello World</h3>
        <h4 :style="{ color: on }">Current Color: {{ on }}</h4>
        <Light style="width:20%" :red="on === 'Red' ? red : redDefault" />
        <div>
          <button @click="setGreen()">Set Green</button>
          <button @click="setYellow()">Set Yellow</button>
          <button @click="setRed()">Set Red</button>
        </div>
      </div>
    </Traffic>
  </div>
</template>

<script>
// @ is an alias to /src
import Traffic from "@/components/Traffic.vue";
import Light from "@/components/Light.vue";

export default {
  name: "Home",
  components: {
    Traffic,
    Light
  },
  data() {
    return {
      red: "#F50A0A",
      redDefault: "#F98686"
    };
  }
};
</script>

<style scoped>
.traffic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

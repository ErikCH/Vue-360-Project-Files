<template>
  <div id="app">
    <Profile age="23" name="Erik" location="Reno">
      <template v-slot:car>
        <h3>Car Model: Subaru</h3>
      </template>
      <template v-slot:city="ci">
        <h3>City: Reno</h3>
        <h5>NickName: {{ ci.cityInfo.nickName }}</h5>
        <h5 v-for="(park, idx) in ci.cityInfo.parks" :key="idx">
          Parks: {{ park }}
        </h5>
        <h5>Parking: {{ ci.cityInfo.parking ? "Yes" : "No" }}</h5>
      </template>
      <template v-slot:default="v">
        <h3>County: Washoe</h3>
        {{ v.v }}
      </template>
      <!-- <h3>Test</h3> -->
    </Profile>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
export default {
  name: "App",
  components: {
    Profile
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

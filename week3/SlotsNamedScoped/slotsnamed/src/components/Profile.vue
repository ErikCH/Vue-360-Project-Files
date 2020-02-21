<template>
  <div>
    <slot name="car"></slot>
    <h3>Name: {{ name }}</h3>
    <h3>Age: {{ age }}</h3>

    <h3>Location: {{ location }}</h3>
    <slot :v="'hi'"></slot>
    <slot name="city" :cityInfo="cityInfo"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityInfo: {
        parks: ["Idlewild", "Shanadoh"],
        parking: true,
        nickName: "Biggest Little city"
      }
    };
  },
  props: ["name", "age", "location"]
};
</script>

<style scoped></style>

<template>
  <div class="flex flex-col items-start justify-center mt-4">
    <button
      v-for="(value, name) in questions.questions"
      :key="value"
      class="items bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded w-64 hover:bg-blue-500 hover:text-white hover:border-transparent"
      :class="{
        'bg-blue-500': selected === name,
        'bg-red-400': error && questions.answer === name
      }"
      @click="$emit('update:selected', name)"
    >
      {{ value }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["questions", "selected", "error"]
};
</script>

<style lang="scss" scoped>
.items {
  margin: 5px 0;
  padding: 5px;
}
</style>

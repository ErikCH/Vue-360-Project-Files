<template>
  <section class="flex flex-col items-center w-6/12 justify-center m-auto ">
    <h3 class="mt-10 text-4xl text-blue-700 text-center">
      {{ title }}
    </h3>
    <div class="relative w-full ">
      <div class="absolute text-2xl text-orange-700  mr-24 mt-6 shadow-2xl">
        Current Score: {{ getScore }}
      </div>
    </div>

    <slot></slot>

    <div class="text-3xl text-orange-400 mt-10">
      Question Number {{ page }} / {{ getNumOfQuestions }}
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "getScore", "page", "getNumOfQuestions"]
};
</script>

<style lang="scss" scoped></style>

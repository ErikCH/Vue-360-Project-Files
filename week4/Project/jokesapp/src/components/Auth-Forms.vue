<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full max-w-xs">
      <h5>{{ title }}</h5>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="test@test.com"
            :value="email"
            @input="$emit('update:email', $event.target.value)"
          />
        </div>
        <div class="mb-6">
          <label
            class="
          block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="************"
            autocomplete="password"
            :value="password"
            @input="$emit('update:password', $event.target.value)"
          />
          <slot name="pinfo"></slot>
        </div>
        <div class="flex items-center justify-between">
          <slot></slot>
        </div>
      </form>
      <h5>{{ error }}</h5>
      <p class="text-center text-gray-500 text-xs">
        &copy;Vue 360. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["email", "password", "error", "title"]
});
</script>

<style scoped></style>

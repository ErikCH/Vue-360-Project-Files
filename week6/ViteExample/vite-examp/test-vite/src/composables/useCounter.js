import { ref } from "vue";

export const counter = ref(0);
export const increment = () => counter.value++;

<script setup lang="ts">
import { ref } from "vue";

const { greetings } = defineProps<{
  greetings: string[];
}>();

const greeting = ref(greetings[0]);

function randomMessage() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function onClick() {
  greeting.value = randomMessage();
}
</script>
<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
    <button @click="onClick">New Greeting</button>
  </div>
</template>

<style>
button {
  border-radius: 0px;
  border-width: 1px;
  cursor: pointer;
}
</style>

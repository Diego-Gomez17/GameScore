
<template>
  <div class="min-h-screen">
    <h1 class="text-4xl text-center">Home</h1>
    <br>
    <getHorse v-if="horseRendered" @horseRendered="handleHorseRendered" />
    <div v-else class="min-h-screen flex flex-col justify-center items-center text-center">
      <iframe src="https://giphy.com/embed/vsyKKf1t22nmw" width="150" height="150"></iframe>
      <p>Cargando...</p>
    </div>
  </div>
</template>
<script setup>
import getHorse from '../components/getHorse.vue';
import { ref, onMounted } from 'vue';
const horseRendered = ref(false);

onMounted(() => {
  setTimeout(() => {
    horseRendered.value = true;
  }, 1000);
});

</script>
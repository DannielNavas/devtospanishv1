<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50;
}
</style>

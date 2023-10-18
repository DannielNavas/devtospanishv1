<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <template>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </template>
  <RouterView />
</template>

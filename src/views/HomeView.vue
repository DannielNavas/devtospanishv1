<script setup lang="ts">
import Card from '@/components/Card.vue';
import { computed, onMounted, ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

let isLoading = ref(true);
const fullPage = ref(true);
const posts = ref([]);


const allPosts = computed(() => {
  return posts.value.map((post: any, index: number) => {
    return {
      ...post,
      isFirst: index === 0 || post.published_at.split('T')[0] === new Date().toISOString().split('T')[0],
    };
  });
});

const getAllPost = (page: number) => {
  fetch(`https://devtospanishback.vercel.app/api/postspanish/${page}`)
    .then((response) => response.json())
    .then((data) => {
      isLoading.value = false;
      posts.value = data;
    });

};


onMounted(() => {
  getAllPost(1);
});

const onCancel = () => {
  console.log('cancel');
}
</script>

<template>
  <loading :active="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage" />
  <Suspense>
    <main class="w-screen h-full flex flex-wrap gap-8 justify-center px-16 mt-6">
      <Card suspense v-for="article in allPosts" :key="article.id" :article="article">
        <template #default>
          {{ article ? article.title : 'Cargando...' }}
        </template>
      </Card>
      <a href="https://librecounter.org/referer/show" target="_blank">
        <img src="https://librecounter.org/counter.svg" referrerPolicy="unsafe-url" width="0" />
      </a>
    </main>
  </Suspense>
</template>

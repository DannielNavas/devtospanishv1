<script setup lang="ts">
import Card from '@/components/Card.vue';
import { computed, onMounted, ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

let isLoading = ref(true);
const fullPage = ref(true);
const posts = ref([]);


const allPosts = computed(() => {
  return posts.value.map((post: {
    [x: string]: any; id: number, title: any; description: any; published_at: any; cover_image: any; social_image: string, url: string, canonical_url: string
  }) => {
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      date: post.published_at,
      image: post.cover_image ?? post.social_image,
      url: post.url ?? post.canonical_url,
      author: post.user.name,
      reactions: post.public_reactions_count,
      comments: post.comments_count,
      readingTime: post.reading_time_minutes,
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
      <Card suspense v-for="article in allPosts" :key="article.id" :title="article.title"
        :description="article.description" :date="article.date" :image="article.image" :url="article.url"
        :author="article.author" :reactions="article.reactions" :comments="article.comments"
        :readingTime="article.readingTime" />
    </main>
  </Suspense>
</template>

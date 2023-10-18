<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue';


const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Title',
    },
    description: {
        type: String,
        required: true,
        default: 'Description',
    },
    date: {
        type: String,
        required: true,
        default: new Date().toLocaleDateString(),
    },
    image: {
        type: String,
        required: true,
        default: 'https://picsum.photos/200/300',
    }
});

const { title, description, date, image } = toRefs(props);
</script>
<template>
    <article class="w-80 h-96 border-slate-800 rounded-lg border-current bg-orange-400 p-6">
        <img :src="image" alt="" class="w-full h-1/2 rounded-lg">
        <!-- date -->
        <div class="flex justify-between items-center mt-3">
            <p class="text-xs">{{ date }}</p>
            <p class="text-xs">author</p>
        </div>
        <h2 class="text-xl font-bold mt-4">{{ title }}</h2>
        <p class="text-sm mt-2">{{ description }}</p>

    </article>
</template>

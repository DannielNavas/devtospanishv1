<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { IconHeart, IconMessage, IconShare2 } from '@tabler/icons-vue';
import { computed, defineProps, toRefs } from 'vue';


const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const { article } = toRefs(props);

const { comments_count, description, cover_image, social_image, public_reactions_count, reading_time_minutes, title, url, published_at, user } = article.value;

const { name, username } = user;

const share = async (url: string, title: string, description: string) => {
    event?.preventDefault();
    const shareData = {
        title,
        text: description,
        url,
    };
    try {
        if (navigator.share && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            console.log('Web Share API not supported.');
        }
    } catch (err) {
        console.log(err);
    }
}

const dateFormat = computed(() => {
    const newDate = new Date(published_at);
    return newDate.toLocaleString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
});

</script>
<template>
    <a :href="url" target="_blank" rel="noopener noreferrer">
        <article class="lg:w-96 sm:w-72 h-max border-slate-800 rounded-lg border border-current p-4 dark:border-slate-50">
            <router-link :to="`/articles-user/${username}`">
                <p class="text-sm w-full mb-4 hover:text-slate-400">{{ name
                }}</p>
            </router-link>
            <img :src="cover_image ?? social_image" :alt="title" class="w-full h-36 object-fill rounded-lg" loading="lazy">
            <div class="flex justify-between items-center mt-3">
                <p class="text-xs">{{ dateFormat }}</p>
                <p class="text-xs">{{ reading_time_minutes }}
                    <span>
                        {{ reading_time_minutes === 1 ? 'minuto' : 'minutos' }} de lectura
                    </span>
                </p>
            </div>
            <h2 class="text-xl font-bold mt-4 h-20">{{ title }}</h2>
            <!-- <p class="text-sm mt-2 h-16">{{ description }}</p> -->
            <div class="flex justify-evenly mt-4">
                <!-- icons -->
                <div class="flex justify-center items-center gap-2">
                    <IconHeart class="text-red-500" />
                    <p class="m-0 text-lg">{{ public_reactions_count }}</p>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <IconMessage class="text-blue-500" />
                    <p class="m-0 text-lg">{{ comments_count }}</p>
                </div>
                <IconShare2 class="text-green-500" @click="share(url, title, description)" />
            </div>
        </article>
    </a>
</template>

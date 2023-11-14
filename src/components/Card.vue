<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { IconHeart, IconMessage, IconShare2 } from '@tabler/icons-vue';
import { computed, defineProps, toRefs } from 'vue';


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
    },
    url: {
        type: String,
        required: true,
        default: 'https://google.com',
    },
    author: {
        type: String,
        required: true,
        default: 'Author',
    },
    reactions: {
        type: Number,
        required: true,
        default: 0,
    },
    comments: {
        type: Number,
        required: true,
        default: 0,
    },
    readingTime: {
        type: Number,
        required: true,
        default: 0,
    }
});

const { title, description, date, image, url, reactions, comments } = toRefs(props);

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
    const newDate = new Date(date.value);
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
            <p class="text-xs w-full">{{ author }}</p>
            <img :src="image" :alt="title" class="w-full h-36 object-fill rounded-lg" loading="lazy">
            <div class="flex justify-between items-center mt-3">
                <p class="text-xs">{{ dateFormat }}</p>
                <p class="text-xs">{{ readingTime }}
                    <span>
                        {{ readingTime === 1 ? 'minuto' : 'minutos' }} de lectura
                    </span>
                </p>
            </div>
            <h2 class="text-xl font-bold mt-4 h-20">{{ title }}</h2>
            <!-- <p class="text-sm mt-2 h-16">{{ description }}</p> -->
            <div class="flex justify-evenly mt-4">
                <!-- icons -->
                <div class="flex justify-center items-center gap-2">
                    <IconHeart class="text-red-500" />
                    <p class="m-0 text-lg">{{ reactions }}</p>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <IconMessage class="text-blue-500" />
                    <p class="m-0 text-lg">{{ comments }}</p>
                </div>
                <IconShare2 class="text-green-500" @click="share(url, title, description)" />
            </div>
        </article>
    </a>
</template>

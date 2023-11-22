<script setup lang="ts">
import { IconBrandGithub, IconBrandX, IconWorldWww } from '@tabler/icons-vue';
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    userData: {
        type: Object,
        required: true,
    },
});

const { userData } = toRefs(props);
const { name, username, profile_image, summary, website_url, location, twitter_username, github_username } = userData.value;

</script>

<template>
    <header class="h-68 w-full flex px-28 flex-col items-center">
        <img :src="profile_image" :alt="username" class="w-28 rounded-full mt-8 " loading="lazy">
        <h1 class="text-2xl font-bold mt-2 mb-2">{{ name }}</h1>
        <p>{{ summary }}</p>
        <div class="flex gap-4 mt-4 mb-3">
            <a :href="website_url" target="_blank" rel="noopener noreferrer" v-if="website_url">
                <IconWorldWww :size="34" />
            </a>
            <a :href="twitter_username" target="_blank" rel="noopener noreferrer" v-if="twitter_username">
                <IconBrandX :size="34" />
            </a>
            <a :href="github_username" target="_blank" rel="noopener noreferrer" v-if="github_username">
                <IconBrandGithub :size="34" />
            </a>
        </div>
        <p>{{ location }}</p>
    </header>
</template>

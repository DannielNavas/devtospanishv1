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
        <div class="avatar mt-8">
            <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img :src="profile_image" :alt="username" loading="lazy" class="rounded-full" />
            </div>
        </div>

        <h1 class="text-4xl font-extrabold mt-2 mb-4">{{ name }}</h1>
        <p class="text-lg">{{ summary }}</p>
        <div class="flex gap-4 mt-4 mb-3 mx-auto">
            <a :href="website_url" target="_blank" rel="noopener noreferrer" v-if="website_url">
                <IconWorldWww :size="34" />
            </a>
            <a :href="'https://twitter.com/' + twitter_username" target="_blank" rel="noopener noreferrer"
                v-if="twitter_username">
                <IconBrandX :size="34" />
            </a>
            <a :href="'https://github.com/' + github_username" target="_blank" rel="noopener noreferrer"
                v-if="github_username">
                <IconBrandGithub :size="34" />
            </a>
        </div>
        <p class="text-gray-600">{{ location }}</p>
    </header>
</template>

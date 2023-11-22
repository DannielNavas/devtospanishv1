<script setup lang="ts">
import { IconBrandGithub, IconBrandX, IconWorldWww } from '@tabler/icons-vue';
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const { user } = toRefs(props);
const { name, username, profile_image, summary, website_url, location, twitter_username, github_username } = user.value;

</script>

<template>
    <header>
        <img :src="profile_image" :alt="username">
        <h1>{{ name }}</h1>
        <p>{{ summary }}</p>
        <a :href="website_url" target="_blank" rel="noopener noreferrer" v-if="website_url">
            <IconWorldWww />
        </a>
        <a :href="twitter_username" target="_blank" rel="noopener noreferrer">
            <IconBrandX />
        </a>
        <a :href="github_username" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub />
        </a>
        <p>{{ location }}</p>
    </header>
</template>

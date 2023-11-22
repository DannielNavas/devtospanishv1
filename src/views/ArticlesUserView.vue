<template>
    <loading :active="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage" />
    <HeaderUser :userData="userData" v-if="userData" />
    <Suspense>
        <main class="w-screen h-full flex flex-wrap gap-8 justify-center px-16 mt-6">
            <Card suspense v-for="article in allPostsUser" :key="article.id" :article="article">
                <template #default>
                    {{ article ? article.title : 'Cargando...' }}
                </template>
            </Card>
        </main>
    </Suspense>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import HeaderUser from '@/components/HeaderUser.vue';
import { computed, defineProps, onMounted, ref, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

let isLoading = ref(true);
const fullPage = ref(true);
const posts = ref([]);
const userData = ref();
const props = defineProps({
    username: {
        type: String,
        required: true,
    },
});

const { username } = toRefs(props);

const getAllPostUser = () => {
    fetch(`https://dev.to/api/articles?username=${username.value}`)
        .then((response) => response.json())
        .then((data) => {
            posts.value = data;
        });
};

const getDataUser = () => {
    fetch(`https://dev.to/api/users/by_username?url=${username.value}`)
        .then((response) => response.json())
        .then((data) => {
            isLoading.value = false;
            userData.value = data;
        });
};

onMounted(() => {
    getAllPostUser();
    getDataUser();
});

const allPostsUser = computed(() => {
    return posts.value.map((post: any) => {
        return {
            ...post,
        };
    });
});
const onCancel = () => {
    console.log('cancel');
}
</script>

<style lang="scss" scoped>
</style>

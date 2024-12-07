<script setup lang="ts">
import { usePosts } from "~/composables/usePosts";

const { data, loading, fetchPosts } = usePosts();

const reFetch = () => {
  fetchPosts(); // Re-fetch posts
};
</script>

<template>
  <div>
    <button @click="reFetch">Reload Posts</button>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li
        v-for="item in data"
        :key="item.id"
        class="p-3 text-sm border-b-2 border-white"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

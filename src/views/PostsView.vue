<script setup lang="ts">
import { ref } from 'vue'
import { vAutoFocus } from '@/directives/v-auto-focus'

const posts = ref([
  { id: 'id1', title: 'Post 1' },
  { id: 'id2', title: 'Post 2' },
  { id: 'id3', title: 'Post 3' },
])
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul class="mb-3">
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postsDetails/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea
      name="about-text"
      id="about-text"
      class="border border-black rounded-lg"
      v-auto-focus
    ></textarea>
  </div>
</template>

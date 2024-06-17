<script setup lang="ts">
import { ref } from 'vue'
import { vAutoFocus } from '@/directives/v-auto-focus'
import { useCounter } from '@/use/useCounter'

const posts = ref([
  { id: 'id1', title: 'Post 1' },
  { id: 'id2', title: 'Post 2' },
  { id: 'id3', title: 'Post 3' },
])

const { counterData, increaseCounter, oddOrEven } = useCounter()
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul class="mb-3">
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postsDetails/${post.id}`">{{
          post.title
        }}</RouterLink>
      </li>
    </ul>

    <textarea
      name="about-text"
      id="about-text"
      class="border border-black rounded-lg"
      v-auto-focus
    ></textarea>

    <div>
      <button
        @click="increaseCounter(1, $event)"
        class="p-3 border border-black bg-pink-300 w-56 text-4xl"
        :class="{ 'bg-pink-500': counterData.count % 2 === 0 }"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

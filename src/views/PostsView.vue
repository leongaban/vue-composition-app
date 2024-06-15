<script setup>
import { vAutoFocus } from '@/directives/v-auto-focus'
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul class="mb-3">
      <li>
        <RouterLink to="/postsDetails/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postsDetails/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postsDetails/id3">Post 3</RouterLink>
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

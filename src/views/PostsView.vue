<script setup>
import { vAutoFocus } from '@/directives/v-auto-focus'
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>
    <textarea
      name="about-text"
      id="about-text"
      class="border border-black rounded-lg"
      v-auto-focus
    ></textarea>
  </div>
</template>

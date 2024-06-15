<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.params.id
</script>

<template>
  <div class="posts">
    <h1>Posts Detail</h1>
    <p>
      Display the contest of the post with ID of <strong>{{ postId }}</strong> here
    </p>

    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

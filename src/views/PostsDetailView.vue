<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const postId = ref(route.params.id)

const btnClass = 'bg-green-200 hover:bg-green-50 border border-black rounded-lg p-3'

const showPostId = () => {
  console.log('Post id:', postId.value)
}

const goHome = () => {
  router.push('/')
}

const goToFirstPost = () => {
  router.push({
    name: 'postsDetail',
    params: {
      id: 'id1',
    },
  })
}

onMounted(() => {
  console.log('Mounted:', postId.value)
})

// Watch for route changes and update postId
watch(
  () => route.params.id,
  newId => {
    postId.value = newId
    console.log('Route changed, new postId:', newId)
  },
)
</script>

<template>
  <div class="posts">
    <h1>Posts Detail</h1>
    <p>
      Display the content of the post with ID of <strong>{{ postId }}</strong> here
    </p>

    <div class="mb-3">
      <button @click="showPostId" :class="btnClass">Show Post ID</button>
    </div>

    <div class="mb-3">
      <button @click="goHome" :class="btnClass">Go Home in 3 secs</button>
    </div>

    <div class="mb-3">
      <button @click="goToFirstPost" :class="btnClass">Go to first post</button>
    </div>

    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

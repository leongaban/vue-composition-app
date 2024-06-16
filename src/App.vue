<script setup lang="ts">
import { sectionClass } from '@/styles/tailwindStyles'
import { reactive, provide } from 'vue'

const userData = reactive({
  name: 'Leon Gaban',
  username: 'leongaban',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
})

provide('userData', userData)
</script>

<template>
  <div class="user-data absolute bg-slate-100 top-0 right-0 p-2">
    {{ userData.name }}
    @{{ userData.username }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <section :class="sectionClass">
    <h1 class="text-5xl mr-3">Leon Gaban</h1>
    <p class="text-black">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </section>

  <RouterView />

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

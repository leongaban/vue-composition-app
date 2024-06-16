<script setup lang="ts">
import { sectionClass } from '@/styles/tailwindStyles'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <section :class="sectionClass">
    <h1 class="text-5xl mr-3">Leon Gaban</h1>
    <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </section>

  <RouterView />

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

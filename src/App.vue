<script setup lang="ts">
const sectionClass =
  'bg-green-400 flex items-center justify-center text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <section :class="sectionClass">
    <h1 class="text-5xl">Leon Gaban</h1>
    <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </section>

  <RouterView />

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

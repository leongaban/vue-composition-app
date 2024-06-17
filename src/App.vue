<script setup lang="ts">
import { useOnline } from '@vueuse/core'
import { reactive, provide } from 'vue'
import { sectionClass } from '@/styles/tailwindStyles'

const userData = reactive({
  name: 'Leon Gaban',
  username: 'leongaban',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
})

provide('userData', userData)

const online = useOnline()
</script>

<template>
  <div class="user-data absolute bg-slate-100 top-0 right-0 p-2">
    @{{ userData.username }} | Network Status:
    <span :class="online ? 'text-green-500' : 'text-red-500'">
      {{ online ? 'Online' : 'Offline' }}
    </span>
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

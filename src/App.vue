<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <section
    class="bg-green-400 flex items-center justify-center text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20"
  >
    <h1 class="text-5xl">Leon Gaban</h1>
    <p class="text-black">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iste debitis eaque in
      repudiandae natus porro maxime quas molestiae voluptate inventore nobis eos, rerum sed dolore
      earum quasi sapiente odio.
    </p>
  </section>

  <RouterView />

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

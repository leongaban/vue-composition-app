<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import { btnStyleDark } from '@/styles/tailwindStyles'

const showModal = ref(false)
</script>

<template>
  <div>
    <h1>Modals</h1>
    <button @click="showModal = true" :class="btnStyleDark">Show Modal</button>

    <Modal v-if="showModal" @close="showModal = false" :btn-style="btnStyleDark" />
  </div>
</template>

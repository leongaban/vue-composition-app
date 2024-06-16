<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const btnStyle =
  'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
</script>

<template>
  <div>
    <h1>Modals</h1>
    <button @click="showModal = true" :class="btnStyle">Show Modal</button>

    <teleport to="#modals-container">
      <div
        v-if="showModal"
        class="modal z-10 absolute top-0 left-0 w-full h-full p-10 bg-yellow-50"
      >
        <h1>This is a modal</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora quibusdam tenetur,
          debitis autem fugit a nesciunt mollitia ipsa inventore nostrum perspiciatis neque dolor id
          magnam facere eum similique? Adipisci.
        </p>
        <button @click="showModal = false" :class="btnStyle">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

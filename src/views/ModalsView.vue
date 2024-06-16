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

    <Modal
      v-if="showModal"
      @close="showModal = false"
      title="My Modal Title"
      :btn-style="btnStyleDark"
    >
      <!-- <template #title>My new title</template> -->
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora quibusdam tenetur,
        debitis autem fugit a nesciunt mollitia ipsa inventore nostrum perspiciatis neque dolor id
        magnam facere eum similique? Adipisci.
      </p>
    </Modal>
  </div>
</template>

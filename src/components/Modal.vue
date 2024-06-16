<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  btnStyle: String,
})

const emit = defineEmits(['close'])
</script>

<template>
  <teleport to="#modals-container">
    <div class="modal z-10 absolute top-0 left-0 w-full h-full p-10 bg-yellow-50">
      <h1>This is a modal</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora quibusdam tenetur,
        debitis autem fugit a nesciunt mollitia ipsa inventore nostrum perspiciatis neque dolor id
        magnam facere eum similique? Adipisci.
      </p>
      <button :class="btnStyle" @click="$emit('close')">Hide modal</button>
    </div>
  </teleport>
</template>

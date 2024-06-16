<script setup>
import { defineProps, defineEmits, useSlots } from 'vue'
import { modalStyle } from '@/styles/tailwindStyles'

const props = defineProps({
  title: String,
  btnStyle: String,
})

const emit = defineEmits(['close'])

// const slots = useSlots()
// console.log(slots.title()) // slots.title()[0].children
</script>

<template>
  <teleport to="#modals-container">
    <div :class="modalStyle">
      <!-- <h1><slot name="title" /></h1> -->
      <h1>{{ props.title }}</h1>
      <slot />
      <button :class="btnStyle" @click="$emit('close')">Hide modal</button>
    </div>
  </teleport>
</template>

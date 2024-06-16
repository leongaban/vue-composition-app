<script setup>
import { defineProps, defineEmits, useSlots } from 'vue'
import { modalStyle } from '@/styles/tailwindStyles'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  title: String,
  btnStyle: String,
})

const emit = defineEmits(['update:modelValue'])

const handleCloseModal = () => {
  emit('update:modelValue', false)
}

// const slots = useSlots()
// console.log(slots.title()) // slots.title()[0].children
</script>

<template>
  <teleport to="#modals-container">
    <div v-if="modelValue" :class="modalStyle">
      <!-- <h1><slot name="title" /></h1> -->
      <h1>{{ props.title }}</h1>
      <slot />
      <button :class="btnStyle" @click="handleCloseModal">Hide modal</button>
    </div>
  </teleport>
</template>

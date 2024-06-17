<script setup>
import { inject } from 'vue'
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

const userData = inject('userData')
</script>

<template>
  <teleport to="#modals-container">
    <div v-if="modelValue" :class="modalStyle">
      <!-- <h1><slot name="title" /></h1> -->
      <!-- <pre>
        <div v-for="(value, key) in slots.title()[0]" :key="key">
          <strong>{{ key.toString() }}:</strong>
          {{ value ? value.toString() : "null" }}
        </div>
      </pre> -->

      <h1>{{ props.title }}</h1>
      <slot />
      <button :class="btnStyle" @click="handleCloseModal">Hide modal</button>
      <div>Username is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

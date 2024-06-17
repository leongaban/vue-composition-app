<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { vAutoFocus } from '@/directives/v-auto-focus'

// const titleRef = ref<HTMLElement | null>(null)
const btnClass = 'border bg-gray-100 rounded-lg py-3 px-6 text-2xl m-5'

const counter = useCounterStore()

// onMounted(() => {
//   if (titleRef.value) {
//     console.log(titleRef.value.offsetWidth)
//   }
// })
</script>

<template>
  <div class="home text-center mt-2">
    <div>
      <h1 ref="titleRef">{{ counter.title }}</h1>
      <button :class="btnClass" @click="counter.decreaseCounter()">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button :class="btnClass" @click="counter.increaseCounter()">+</button>
    </div>

    <p class="m-5">
      This counter is <strong>{{ counter.oddOrEven }}</strong>
    </p>

    <div class="mt-2">
      <h4>Edit counter title:</h4>
      <input
        v-model="counter.count"
        v-auto-focus
        type="text"
        class="border border-gray-500 mt-3 p-3 rounded-lg"
      />
    </div>
  </div>
</template>

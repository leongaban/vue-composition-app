<script setup lang="ts">
import { computed, ref, reactive, watch, onMounted, nextTick } from 'vue'
import { vAutoFocus } from '@/directives/v-auto-focus'

const title = 'Vue Counter'

const titleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  console.log('Do stuff related to title')
})

const counterData = reactive({
  count: 0,
  title: 'Counter',
})

// prettier-ignore
watch(() => counterData.count, (count, prevCount) => {
  console.log(`Count changed from ${prevCount} to ${count}`)
  if (count === 20)  {
    alert('Counter reached 20')
  }
})

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd'
})

const increaseCounter = async (amount: number, event: Event) => {
  // console.log(event)
  counterData.count += amount

  await nextTick()
  console.log('DOM updated')
}

const decreaseCounter = (amount: number): number => (counterData.count -= amount)

const btnClass = 'border bg-gray-100 rounded-lg p-3'

onMounted(() => {
  if (titleRef.value) {
    console.log(titleRef.value.offsetWidth)
  }
})
</script>

<template>
  <div class="home">
    <div>
      <h1 ref="titleRef">{{ title }}</h1>
      <button :class="btnClass" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button :class="btnClass" @click="increaseCounter(1, $event)">+</button>
    </div>

    <p>
      This counter is <strong>{{ oddOrEven }}</strong>
    </p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counterData.title"
        v-auto-focus
        type="text"
        class="border border-gray-500 rounded-lg"
      />
    </div>
  </div>
</template>

<style>
h1 {
  margin-bottom: 1.5rem;
}

h4 {
  margin: 1rem 0;
  font-size: 1.5rem;
}

p {
  margin: 1rem 0;
}

strong {
  font-weight: bold;
}

.home {
  padding: 1rem;
  text-align: center;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.counter {
  padding: 0.5rem 2rem;
  width: 4rem;
  font-size: 2rem;
}

.edit {
  margin-top: 2rem;

  input {
    padding: 1rem;
    font-size: 1.15rem;
    border-radius: 0.5rem;
  }
}
</style>

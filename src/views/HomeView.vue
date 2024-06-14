<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  watch,
} from 'vue'

const title = 'Vue Counter'

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

const increaseCounter = (amount: number, event: Event): number => {
  // console.log(event)
  return (counterData.count += amount)
}

const decreaseCounter = (amount: number): number => (counterData.count -= amount)

onBeforeMount(() => {
  console.log('Component is about to mount')
})

onMounted(() => {
  console.log('Component is mounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <div class="home">
    <div>
      <h1>{{ title }}</h1>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
    </div>

    <p>
      This counter is <strong>{{ oddOrEven }}</strong>
    </p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" />
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

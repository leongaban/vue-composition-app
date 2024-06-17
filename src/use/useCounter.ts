import { computed, reactive, watch, nextTick } from 'vue'

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: 'Counter',
  })

  // prettier-ignore
  watch(() => counterData.count, (count: number, prevCount: number) => {
    console.log(`Count changed from ${prevCount} to ${count}`)
    if (count === 20)  {
      alert('Counter reached 20')
    }
  })

  const oddOrEven = computed(() =>
    counterData.count % 2 === 0 ? 'even' : 'odd',
  )

  const increaseCounter = async (amount: number, event: Event) => {
    // console.log(event)
    counterData.count += amount
    // await nextTick()
    // console.log('DOM updated')
  }

  const decreaseCounter = (amount: number): number =>
    (counterData.count -= amount)

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }
}

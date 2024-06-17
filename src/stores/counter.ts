import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Counter App',
  }),
  getters: {
    oddOrEven: state => {
      return state.count % 2 === 0 ? 'even' : 'odd'
    },
  },
  actions: {
    increaseCounter(amount: number = 1) {
      this.count += amount
    },
    decreaseCounter(amount: number = 1) {
      this.count -= amount
    },
  },
})

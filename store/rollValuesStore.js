import { defineStore } from 'pinia';

export const useRollValuesStore = defineStore('rollValues', {
  state: () => ({
    diceCount: 4,
    successThreshold: 4,
    critThreshold: 6,
  }),
  actions: {
    incrementValue(key) {
        this[key]++;
    },
    decrementValue(key) {
        this[key]--;
    },
  },
});
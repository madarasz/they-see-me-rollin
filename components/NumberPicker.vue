<template>
    <div>
      <label>{{ label }}</label>
      <button @click="decrement">-</button>
      <input type="number" :value="modelValue" readonly>
      <button @click="increment">+</button>
    </div>
  </template>
  
  <script>
  import { useRollValuesStore } from "../store/rollValuesStore.js";
  export default {
    props: {
      modelValue: Number,
      min: Number,
      max: Number,
      label: String,
      storeKey: String
    },
    setup(props, { emit }) {
        const store = useRollValuesStore();

        function increment() {
        if (props.modelValue < props.max) {
            store.incrementValue(props.storeKey);
        }
        }

        function decrement() {
        if (props.modelValue > props.min) {
            store.decrementValue(props.storeKey);
        }
        }

        return { increment, decrement };
    }
  };
  </script>
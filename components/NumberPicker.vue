<template>
  <div class="row">
    <div class="col-4 text-end">
      <label class="align-middle fs-4">{{ label }}:</label>
    </div>
    <div class="col-2 text-end">
      <button @click="decrement" type="button" class="btn btn-primary">
        <i class="bi bi-dash-circle"></i>
      </button>
    </div>
    <div class="col-2 text-center">
      <span class="fs-4">{{ modelValue }}</span>
    </div>
    <div class="col-2">
      <button @click="increment" type="button" class="btn btn-primary">
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
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
<template>
    <div class="row">
        <div class="col-12 col-lg-4">
            <NumberPicker v-model="store.diceCount" label="Dice" storeKey="diceCount" :min="1" :max="10" />
        </div>
        <div class="col-12 col-lg-4">
            <NumberPicker v-model="store.successThreshold" label="Success" storeKey="successThreshold" :min="1" :max="6" />
        </div>
        <div class="col-12 col-lg-4">
            <NumberPicker v-model="store.critThreshold" label="Crit" storeKey="critThreshold" :min="store.successThreshold"
                :max="6" />
        </div>
    </div>
</template>

<script>
import NumberPicker from './NumberPicker.vue';
import { useRollValuesStore } from "../store/rollValuesStore.js";

export default {
    components: {
        NumberPicker
    },
    data() {
        return {
            failDice: [],
            successDice: [],
            critDice: [],
            rollAreaDice: [],
            // ... other data properties
        };
    },
    setup() {
        const store = useRollValuesStore();
        return { store };
    },
    methods: {
        rollDice() {
            // ... roll dice and sort them into trays
        },
        // ... other methods like moving dice between trays
    }
};
</script>
<template>
    <div class="tray">
        <div class="row">
            <div class="col-12 text-center">
                <label>{{ label }}</label>:&nbsp;
                <span>{{ dice.length }}</span>
            </div>
        </div>
        <div class="row">
            <Dice v-for="(die, index) in dice" :key="index" :label="die.label" :value="die.value" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DiceTray',
    props: {
        label: {
            type: String,
            default: ""
        },
        dice: {
            type: Array as () => Array<{ label: string, value: number }>,
            default: () => []
        }
    }
});
</script>

<style scoped>
div.tray {
    border: 1px solid black;
    background-color: #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    min-height: 200px;
}
</style>

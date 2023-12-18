<template>
    <div class="tray">
        <div class="row">
            <div class="col-12 text-center">
                <label>{{ label }}</label>:&nbsp;
                <span>{{ dice.length }}</span>
            </div>
        </div>
        <div class="row">
            <VueDraggableNext class="list-group" :list="dice" group="dice" @change="log">
                <div class="list-group-item" v-for="(die, index) in dice" :key="index">
                    <Dice :label="die.label" :value="die.value" />
                </div>
            </VueDraggableNext>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

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
    },
    components: {
        VueDraggableNext
    },
    methods: {
        log(event: any) {
            console.log(event);
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

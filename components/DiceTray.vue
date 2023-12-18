<template>
    <div class="tray">
        <div class="row">
            <div class="col-12 text-center">
                <label>{{ label }}</label>:&nbsp;
                <span>{{ count }}</span>
            </div>
        </div>
        <div class="row">
            <Dice :count="6"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiceTray',
    props: {
        label: String,
        count: Number
    }
}
</script>

<style scoped>
.tray {
    border: 1px solid black;
    background-color: #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    min-height: 200px;
}
</style>

<template>
    <div class="dice face">
        <span v-for="index in value" :key="index" class="pip"></span>
    </div>
</template>

<script>
export default {
    name: 'Dice',
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.dice {
    border: 1px solid black;
    background-color: #fff;
    border-radius: 10%;
    height: 50px;
    width: 50px;
    margin: 10px;
    padding: 5px;
    box-shadow: inset 0 2px white, inset 0 -2px #bbb, inset 2px 0 #d7d7d7,
		inset -2px 0 #d7d7d7;
}
.face {
    display: grid;
    grid-template-areas:
        "a . c"
        "e g f"
        "d . b";
}
.pip {
	display: block;
	align-self: center;
	justify-self: center;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #333;
	box-shadow: inset 0 3px #111, inset 0 -3px #555;
}
.pip:nth-child(2) {
    grid-area: b;
}
.pip:nth-child(3) {
    grid-area: c;
}
.pip:nth-child(4) {
    grid-area: d;
}
.pip:nth-child(5) {
    grid-area: e;
}
.pip:nth-child(6) {
    grid-area: f;
}
.pip:nth-child(odd):last-child {
    grid-area: g;
}
</style>
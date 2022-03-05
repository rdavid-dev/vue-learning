<template>
    <button @click="processButton($event)">{{ buttonTitle }}</button>
</template>

<script>
export default {
    emits: ["set-button"],
    props: {
        buttonTitle: {
            type: String,
            default: 'Button'
        }
    },
    setup(props, {emit}) {
        const processButton = (event) => {
            emit("set-button", event);
        }
        return {
            processButton
        }
    },
}
</script>
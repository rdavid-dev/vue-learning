<template>
    <label for>{{ label }}</label>
    <!-- $attrs receive all binds classes/type -->
    <input v-bind="$attrs" :placeholder="label" :value="modelValue" @input="updateModelValue($event)" />
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
    setup(_, { emit }) {
        const updateModelValue = (event) => {
            emit('update:modelValue', event.target.value)
        }

        return {
            updateModelValue
        }
    },
}
</script>
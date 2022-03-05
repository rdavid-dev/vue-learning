<template>
    <div>
        <h2>Ticket List</h2>
        <ul>
            <li v-for="(t, index) in tickets" :key="index">
                {{ t.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tickets: {
            type: Array,
            required: true
        }
    },
    setup() {
        
    },
}
</script>
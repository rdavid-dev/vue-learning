<template>
    <div>
        <form @submit.prevent="addTicket">
            <label for="">Title</label>
            <input type="text" v-model="title"/>
            <br>
            <label for="">Description</label>
            <textarea  v-model="description" id="" cols="30" rows="10"></textarea>
            <br>
            <button type="submit">Add Ticket</button>
        </form>
    </div>
</template>

<script>
import { toRefs, ref } from 'vue'
export default {
    emits: ['add-ticket'],
    setup(props, { emit }) {
        // const forms = reactive({
        //     title: '',
        //     description: ''
        // })
        // const forms = ref({
        //     title: null,
        //     description: null
        // })
        const title = ref(null)
        const description = ref(null)

        const addTicket = () => {
            emit('add-ticket', {
                title: title.value,
                description: description.value
            })
        }

        return {
            title,
            description,
            
            addTicket
        }
    },
}
</script>
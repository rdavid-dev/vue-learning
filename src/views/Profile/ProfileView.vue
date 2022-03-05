<template>
    <div>
        <h2>Profile View {{ route.params.name }}</h2>
    </div>
</template>

<script>
import { onMounted, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
    props: ['name'],
    setup(props) {
        const { name } = toRefs(props);
        const route = useRoute()

        //use on mounted when the component first loaded
        onMounted(() => {
            console.log('Profile Name:', route.params.name)
        })

        //Use watch when the parameters is changing
        watch(name, (value) => {
            console.log(Math.floor(Math.random(1, 9999) * 100))
            console.log('Profile Name:', route.params.name)
        })

        return {
            route
        }
    },
}
</script>
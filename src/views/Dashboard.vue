<template>
    <section>
        <h1>Dashboard</h1>
        <Button buttonTitle="Add To Cart" @set-button="addToCart" />
        <img :src="imageUrl" alt />

        <h2 :style="{ color: colorHeading }">Categories</h2>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <p @mouseover="updateImage(category.image)">{{ category.title }}</p>
                <div class="color-profile" @mouseover="updateHeadingColor(category.color)" :style="{ backgroundColor: category.color }"></div>
            </li>
        </ul>
        <h2>{{ headingCombined }}</h2>

        <h2>Form</h2>
        <TicketList :tickets="ticketList" />
        <TicketForm @add-ticket="addTicket"/>
    </section>
</template>

<script>
import { ref, reactive, computed } from "vue"
import Button from "@/components/Buttons.vue"
import TicketForm from "@/components/TicketForm.vue"
import TicketList from "@/components/TicketList.vue"

export default {
    name: "Dashboard",
    components: {
        Button,
        TicketForm,
        TicketList
    },
    setup() {
        const ticketList = ref([])
        const categories = reactive([
            {
                id: 1,
                title: "Dark",
                image: "src/assets/1.jpg",
                color: "black"
            },
            {
                id: 2,
                title: "Plants",
                image: "src/assets/2.jpg",
                color: "green"
            },
            {
                id: 3,
                title: "Mountain",
                image: "src/assets/3.jpg",
                color: "red"
            }
        ])
        const colorHeading = ref("yellow")
        const imageUrl = ref("src/assets/logo.png")
        const heading1 = ref("Vue")
        const heading2 = ref("Mastery")
        const headingCombined = computed(() => `${heading1.value} ${heading2.value}`)

        const addToCart = (value) => {
            console.log(value)
        }

        const updateImage = (image) => {
            imageUrl.value = image
        }

        const updateHeadingColor = (color) => {
            colorHeading.value = color
        }

        const addTicket = (inputs) => {
            console.log(inputs)
            ticketList.value.push(inputs)
        }

        return {
            colorHeading,
            imageUrl,
            headingCombined,
            addToCart,
            categories,
            updateImage,
            updateHeadingColor,
            addTicket,
            ticketList
        }
    },
}
</script>

<style scoped>
.color-profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #c1c1c1;
}
</style>
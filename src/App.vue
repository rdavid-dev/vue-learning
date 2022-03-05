
<template>
  <main>
    <BaseInput v-model="title" label="Title" type="text" />
    <BaseInput v-model="password" label="Password" type="password" />
    {{ title }}
    <button @click="getTitle">Get Title</button>
  </main>
</template>

<script>
import { ref } from "vue"
import BaseInput from "./components/BaseInput.vue"

export default {
  components: {
    BaseInput
  },
  setup() {
    const title = ref(null)
    const password = ref(null)

    const getTitle = () => {
      console.log("Title:", title.value)
      console.log("Password:", password.value)
    }

    return { title, password, getTitle }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <section>
        <h1>Profile Page</h1>
        <ul>
            <li><router-link :to="{ name: 'Profile.View', params: { name: 'Reence'}}">Reence David</router-link></li>
            <li><router-link :to="{ name: 'Profile.View', params: { name: 'Angelie'}}">Angelie Mata</router-link></li>
            <li><router-link :to="{ name: 'Profile.View', params: { name: 'Irin'}}">Irin David</router-link></li>
        </ul>

        <router-view></router-view>
    </section>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>
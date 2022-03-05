import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue" /* webpackChunkName: "Views/Dashboard" */)
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
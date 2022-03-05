import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue" /* webpackChunkName: "Views/Dashboard" */)
    },
    {
        path: "/profile/",
        name: "Profile",
        component: () => import("@/views/Profile/Profile.vue" /* webpackChunkName: "Views/Profile" */),
        children: [
            {
                path: ":name",
                name: "Profile.View",
                component: () => import("@/views/Profile/ProfileView.vue" /* webpackChunkName: "Views/Profile/ProfileView" */),
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
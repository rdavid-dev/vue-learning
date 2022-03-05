import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue" /* webpackChunkName: "Views/Dashboard" */),
        meta: {
            auth: false
        },
    },
    {
        path: "/profile/",
        name: "Profile",
        component: () => import("@/views/Profile/Profile.vue" /* webpackChunkName: "Views/Profile" */),
        meta: {
            auth: true
        },
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

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        console.log('test')
        next('/')
    } else {
        next()
    }
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import {store} from "@/data/store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/home/HomeView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/home/LoginView.vue'),
    },
    {
        path: '/teamMember',
        name: 'teamMember',
        component: () => import('@/components/about/TeamMemeberView.vue'),
    },
    {
        path: '/projects',
        name: '',
        children: [
            {
                path: '',
                name: 'projects',
                component: () => import('@/components/projects/ProjectsView.vue'),
            },
            {
                path: '/projects/project',
                name: 'project',
                component: () => import('@/components/projects/ProjectView.vue'),
            }
        ],

    }
    // {
    //     path: '/contact',
    //     name: 'contact',
    //     component: () => import('@/components/contact/ContactView.vue'),
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes
})

router.beforeEach(async (to, from) => {

    // 跳轉到博客站
    if (to.path === '/blog') {
        window.location = 'https://pilab-hkbu.github.io/blog/'
        return
    }

    if (
        // make sure the user is authenticated
        !store.isNotAuthenticated &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'login'
    ) {
        // redirect the user to the login page
        return { name: 'login' }
    }
})

export default router
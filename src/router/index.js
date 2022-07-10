import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import homeFragment from "@/components/fragments/homeFragment";

const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/registerPage')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/loginPage')
    },
    {
        path: '/',
        name: 'homePage',
        component: HomePage,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "homeFragment",
                component: homeFragment
            }, {
                path: "/movies",
                name: "moviesFragment",
                component: () => import("../components/fragments/moviesFragment")
            },
            {
                path: "/series",
                name: "seriesFragment",
                component: () => import("../components/fragments/seriesFragment")
            },
            {
                path: "/bookmarked",
                name: "bookmarkedFragment",
                component: () => import("../components/fragments/bookmarkedFragment")
            },
            {
                path: "/bookmarked/search",
                name: "bookmarkedSearch",
                component: () => import("../components/fragments/searchFragment")
            },
            {
                path:"/series/search",
                name:"seriesSearch",
                component: () => import("../components/fragments/searchFragment")
            },
            {
                path:"/movies/search",
                name:"moviesSearch",
                component: () => import("../components/fragments/searchFragment")
            },
            {
                path:"/home/search",
                name:"homeSearch",
                component: () => import("../components/fragments/searchFragment")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import homeFragment from "@/components/fragments/homeFragment";
//todo : the user session information wil be stored on the local storage
//step 1 : we login the retrieve the user data and the token
//step 2 : store it in the local storage and set the on the global var that will be used to access them
//if user leave the app the the login data still available on the local storage
//next time he launch the app, we first check the local  storage if we have user data
//the we test if they are still valid (special if the token still valid)
//if they are then we continue the process
//if not we prompt to let the user know he's no longer logged in; and ask if he want to login back or he wanna keep launching the app without being logged

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

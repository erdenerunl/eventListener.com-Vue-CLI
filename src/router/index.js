import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import About from '@/views/About.vue';

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path:"/about",
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
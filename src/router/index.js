import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import About from '@/views/About.vue';
import AddEvent from '@/views/AddEvent.vue';
import Details from '@/views/Details.vue';


const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/addevent",
        component: AddEvent
    },
    {
        path: "/details/:id",
        component: Details
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
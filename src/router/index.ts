import { createRouter, createWebHistory } from "vue-router";

import TemplateBasics from "../pages/TemplateBasics.vue"; //-- Step 3
import ReactivityLab from "../pages/ReactivityLab.vue"; //-- Step 4
import FormsLab from "../pages/FormsLab.vue"; //-- Step 5
import WatchLab from "../pages/WatchLab.vue"; //-- Step 6
import SlotsLab from "../pages/SlotsLab.vue"; //-- Step 7
import PropsEmitsLab from "../pages/PropsEmitsLab.vue"; //-- Step 8
import FetchLab from "../pages/FetchLab.vue"; //-- Step 9
import ComposablesLab from "../pages/ComposablesLab.vue"; //-- Step 10
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import Profile from "../pages/Profile.vue";
import { useAuthStore } from "../stores/auth";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },

    {
        path: '/',
        name: "home",
        component: TemplateBasics,
    },
    {
        path: '/reactivity',
        name: "reactivity",
        component: ReactivityLab,
    },
    {
        path: '/forms',
        name: 'forms',
        component: FormsLab,
    },
    {
        path: '/watch',
        name: 'Watch',
        component: WatchLab,
    },
    {
        path: '/slots',
        name: 'Slots',
        component: SlotsLab,
    },
    {
        path: '/props-emits',
        name: 'PropsEmits',
        component: PropsEmitsLab,
    },
    {
        path: '/fetch',
        name: 'Fetch',
        component: FetchLab,
    },
    {
        path: '/composables',
        name: 'Composables',
        component: ComposablesLab,
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const auth = useAuthStore();

    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return "/login";
    }
});


export default router;
import { createRouter, createWebHistory } from "vue-router";

import TemplateBasics from "../pages/TemplateBasics.vue"; //-- Step 3
import ReactivityLab from "../pages/ReactivityLab.vue"; //-- Step 4
import FormsLab from "../pages/FormsLab.vue"; //-- Step 5
import WatchLab from "../pages/WatchLab.vue"; //-- Step 6
import SlotsLab from "../pages/SlotsLab.vue"; //-- Step 7
import PropsEmitsLab from "../pages/PropsEmitsLab.vue"; //-- Step 8
import FetchLab from "../pages/FetchLab.vue"; //-- Step 9
import ComposablesLab from "../pages/ComposablesLab.vue"; //-- Step 10
import Login from "../pages/Login.vue"; //-- Step 12
import Dashboard from "../pages/Dashboard.vue"; //-- Step 13
import Profile from "../pages/Profile.vue"; //-- Step 14
import { useAuthStore } from "../stores/auth"; //-- Step 15
import AxiosLab from "../pages/AxiosLab.vue"; //-- Step 16
import DynamicFormsLab from "../pages/DynamicFormsLab.vue"; //-- Step 18
import DirectivesLab from "../pages/DirectivesLab.vue"; //-- Step 19
//-- Step 20
import TeleportLab from "../pages/TeleportLab.vue";
import SuspenseLab from "../pages/SuspenseLab.vue";

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
        path: "/profile/:id",
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
    {
        path: '/axios',
        name: 'Axios',
        component: AxiosLab,
        meta: { requiresAuth: true },
    },
    {
        path: '/dynamic-forms',
        name: 'DynamicForms',
        component: DynamicFormsLab,
        meta: { requiresAuth: true },
    },
    {
        path: '/directives',
        name: 'Directives',
        component: DirectivesLab,
        meta: { requiresAuth: true },
    },
    {
        path: "/teleport",
        component: TeleportLab,
        meta: { requiresAuth: true },
    },
    {
        path: "/suspense",
        component: SuspenseLab,
        meta: { requiresAuth: true },
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
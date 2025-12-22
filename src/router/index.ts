import { createRouter, createWebHistory } from "vue-router";

import TemplateBasics from "../pages/TemplateBasics.vue";
import ReactivityLab from "../pages/ReactivityLab.vue";
import FormsLab from "../pages/FormsLab.vue";
import WatchLab from "../pages/WatchLab.vue";
import SlotsLab from "../pages/SlotsLab.vue";
import PropsEmitsLab from "../pages/PropsEmitsLab.vue";
import FetchLab from "../pages/FetchLab.vue";
import ComposablesLab from "../pages/ComposablesLab.vue";

const routes = [
    {
        path:'/',
        name:"home",
        component: TemplateBasics,
    },
     {
        path:'/reactivity',
        name:"reactivity",
        component:ReactivityLab,
    },
     {
        path:'/forms',
        name:'forms',
        component:FormsLab,
    },
     {
        path:'/watch',
        name:'Watch',
        component:WatchLab,
    },
     {
        path:'/slots',
        name:'Slots',
        component:SlotsLab,
    },
     {
        path:'/props-emits',
        name:'PropsEmits',
        component:PropsEmitsLab,
    },
     {
        path:'/fetch',
        name:'Fetch',
        component:FetchLab,
    },
     {
        path:'/composables',
        name:'Composables',
        component:ComposablesLab,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
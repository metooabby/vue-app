import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from "./router";
import vFocus from "./directives/focus";
import vClickOutside from "./directives/clickOutside";
import './style.css'

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.directive("focus", vFocus);
app.directive("click-outside", vClickOutside);
app.mount('#app')

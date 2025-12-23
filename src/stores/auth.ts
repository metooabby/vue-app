import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const user = ref<{ name: string } | null>(null);
    function login() {
        isAuthenticated.value = true
    }
    function logout() {
        isAuthenticated.value = false
    }

    return {
        isAuthenticated,
        user,
        login,
        logout
    }
})


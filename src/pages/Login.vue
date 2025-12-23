<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const router = useRouter();

function handleLogin() {
    auth.login();
    router.push("/dashboard");
}
</script>

<template>
    <div class="max-w-sm space-y-6">
        <h2 class="text-2xl font-semibold">
            Login
        </h2>

        <button class="w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700" @click="handleLogin">
            Login
        </button>
    </div>
</template>

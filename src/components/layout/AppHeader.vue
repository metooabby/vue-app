<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const auth = useAuthStore();
</script>
<template>
    <header class="h-14 bg-emerald-600 text-white flex items-center justify-between px-6 shadow">
        <h1 class=" font-semibold tracking-wide">Vue 3 Mastery Lab</h1>
        <ul class="flex items-center space-x-4 ">
            <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
                <router-link to="/dashboard" class="hover:underline"
                    active-class="font-bold underline">Dashboard</router-link>
            </li>
            <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
                <router-link to="/login">Login</router-link>
            </li>
            <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
                <router-link  :to="{ name: 'Profile', params: { id: auth.user.id } }">Profile</router-link>
            </li>
        </ul>
    </header>
</template>
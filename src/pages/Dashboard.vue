<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();

</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-semibold">
      Dashboard
    </h2>

   <p class="text-gray-700">
      Welcome, {{auth.user?.name }}
    </p>


    <button
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      @click="auth.logout()"
    >
      Logout
    </button>
  </div>
</template>

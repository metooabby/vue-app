<script setup lang="ts">
import { onMounted } from "vue";
import { useFetch } from "../composables/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

const {
  data: users,
  loading,
  error,
  execute,
} = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);

onMounted(() => {
  execute();
});
</script>

<template>
  <div class="max-w-2xl space-y-6">
    <h2 class="text-2xl font-semibold">
      API Fetch Lab
    </h2>

    <!-- Loading -->
    <p v-if="loading" class="text-gray-600">
      Loading users...
    </p>

    <!-- Error -->
    <p v-if="error" class="text-red-600">
      {{ error }}
    </p>

    <!-- Data -->
    <ul v-if="users" class="space-y-2">
      <li
        v-for="user in users"
        :key="user.id"
        class="p-3 bg-white border rounded shadow-sm"
      >
        <p class="font-medium">
          {{ user.name }}
        </p>
        <p class="text-sm text-gray-600">
          {{ user.email }}
        </p>
      </li>
    </ul>

    <!-- Manual reload -->
    <button
      class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      @click="execute"
    >
      Reload
    </button>
  </div>
</template>

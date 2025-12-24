<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchUsers, type User } from "../services/users";

const users = ref<User[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

async function loadUsers() {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetchUsers();
    users.value = response.data;
  } catch (err) {
    error.value = "Failed to load users";
  } finally {
    loading.value = false;
  }
}

onMounted(loadUsers);
</script>

<template>
  <div class="max-w-2xl space-y-6">
    <h2 class="text-2xl font-semibold">
      Axios API Lab
    </h2>

    <p v-if="loading" class="text-gray-600">
      Loading users...
    </p>

    <p v-if="error" class="text-red-600">
      {{ error }}
    </p>

    <ul v-if="!loading && !error" class="space-y-2">
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
  </div>
</template>

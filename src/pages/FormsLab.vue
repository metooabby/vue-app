<script setup lang="ts">
import { reactive } from "vue";

/**
 * Form state (single source of truth)
 */
const form = reactive({
  email: "",
  password: "",
  remember: false,
  role: "user",
});

/**
 * Submit handler
 */
function submitForm() {
  console.log("Form submitted:", { ...form });
  alert("Check console for submitted data");
}
</script>

<template>
  <div class="max-w-xl space-y-8">
    <h2 class="text-2xl font-semibold text-gray-800">
      Forms & v-model
    </h2>

    <form
      class="space-y-6 bg-white p-6 border rounded shadow-sm"
      @submit.prevent="submitForm"
    >
      <!-- Email -->
      <div class="space-y-1">
        <label class="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          v-model.trim="form.email"
          type="email"
          class="w-full px-3 py-2 border rounded"
          placeholder="you@example.com"
        />
      </div>

      <!-- Password -->
      <div class="space-y-1">
        <label class="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          v-model="form.password"
          type="password"
          class="w-full px-3 py-2 border rounded"
        />
      </div>

      <!-- Checkbox -->
      <div class="flex items-center space-x-2">
        <input
          v-model="form.remember"
          type="checkbox"
          class="h-4 w-4"
        />
        <span class="text-sm text-gray-700">
          Remember me
        </span>
      </div>

      <!-- Select -->
      <div class="space-y-1">
        <label class="text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          v-model="form.role"
          class="w-full px-3 py-2 border rounded"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
      >
        Login
      </button>
    </form>
  </div>
</template>

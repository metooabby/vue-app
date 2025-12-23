<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

/**
 * Route param
 */
const userId = computed(() => route.params.id);

/**
 * Query param (optional)
 */
const tab = computed(() => route.query.tab || "overview");
</script>

<template>
  <div class="max-w-xl space-y-6">
    <h2 class="text-2xl font-semibold">
      User Profile
    </h2>

    <div class="p-4 bg-white border rounded shadow-sm space-y-2">
      <p class="text-gray-700">
        User ID:
        <span class="font-semibold">
          {{ userId }}
        </span>
      </p>

      <p class="text-gray-700">
        Active Tab:
        <span class="font-semibold capitalize">
          {{ tab }}
        </span>
      </p>
    </div>

    <!-- Tab navigation using query params -->
    <div class="flex space-x-4">
      <router-link
        :to="{ query: { tab: 'overview' } }"
        class="text-emerald-600 hover:underline"
      >
        Overview
      </router-link>

      <router-link
        :to="{ query: { tab: 'settings' } }"
        class="text-emerald-600 hover:underline"
      >
        Settings
      </router-link>
    </div>
  </div>
</template>

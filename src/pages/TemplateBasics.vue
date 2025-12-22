<script setup lang="ts">
import { ref } from "vue";

/**
 * Reactive state
 */
const title = ref("Vue Template Basics");
const isVisible = ref(true);

const items = ref([
  "Text Binding",
  "Conditional Rendering",
  "List Rendering",
  "Event Handling",
]);

/**
 * Methods
 */
function toggleVisibility() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="max-w-2xl space-y-6">
    <!-- Title -->
    <h2 class="text-2xl font-semibold text-gray-800">
      {{ title }}
    </h2>

    <!-- Action Button -->
    <button
      class="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition"
      @click="toggleVisibility"
    >
      Toggle Details
    </button>

    <!-- Conditional Content -->
    <div
      v-if="isVisible"
      class="p-4 bg-white border rounded-md shadow-sm"
    >
      <p class="text-gray-700">
        This block is rendered conditionally using
        <code class="px-1 bg-gray-100 rounded">v-if</code>.
      </p>
    </div>

    <!-- List Rendering -->
    <div>
      <h3 class="text-lg font-medium text-gray-800 mb-2">
        Covered Topics
      </h3>

      <ul class="space-y-2">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center px-3 py-2 bg-gray-50 border rounded"
        >
          <span
            class="mr-3 h-2 w-2 rounded-full bg-emerald-500"
          ></span>
          <span class="text-gray-700">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

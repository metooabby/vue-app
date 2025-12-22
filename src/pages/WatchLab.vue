<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";

/**
 * State
 */
const search = ref("");
const autoSaveText = ref("");
const saveStatus = ref("Not saved");

/**
 * watch → specific source, previous value
 */
watch(search, (newValue, oldValue) => {
  console.log("Search changed:", oldValue, "→", newValue);
});

/**
 * watchEffect → automatic dependency tracking
 */
watchEffect(() => {
  if (!autoSaveText.value) return;

  saveStatus.value = "Saving...";

  const timeout = setTimeout(() => {
    saveStatus.value = "Saved";
  }, 1000);

  // cleanup
  return () => clearTimeout(timeout);
});
</script>

<template>
  <div class="max-w-2xl space-y-8">
    <h2 class="text-2xl font-semibold text-gray-800">
      Watch & WatchEffect Lab
    </h2>

    <!-- watch example -->
    <div class="p-4 bg-white border rounded shadow-sm space-y-3">
      <h3 class="text-lg font-medium">watch()</h3>

      <input
        v-model="search"
        class="w-full px-3 py-2 border rounded"
        placeholder="Type to trigger watch..."
      />

      <p class="text-sm text-gray-600">
        Open console to see old vs new value.
      </p>
    </div>

    <!-- watchEffect example -->
    <div class="p-4 bg-white border rounded shadow-sm space-y-3">
      <h3 class="text-lg font-medium">watchEffect()</h3>

      <textarea
        v-model="autoSaveText"
        class="w-full px-3 py-2 border rounded"
        rows="3"
        placeholder="Typing here auto-saves..."
      ></textarea>

      <p class="text-sm font-medium text-emerald-600">
        {{ saveStatus }}
      </p>
    </div>
  </div>
</template>

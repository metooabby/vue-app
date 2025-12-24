<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

function closeDropdown() {
  open.value = false;
}
</script>

<template>
  <div class="p-10 space-y-6">
    <input
      v-focus
      class="border px-3 py-2 w-full"
      placeholder="Auto focus works"
    />

    <button
      class="px-4 py-2 bg-emerald-600 text-white rounded"
      @click.stop="open = true"
    >
      Toggle Dropdown
    </button>

    <div
      v-if="open"
      v-click-outside="closeDropdown"
      class="mt-4 p-4 border bg-gray-100 rounded"
    >
      Click outside this box
    </div>
  </div>
</template>

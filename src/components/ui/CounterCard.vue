<script setup lang="ts">
/**
 * Props definition
 */
const props = defineProps<{
  title: string;
  count: number;
}>();

/**
 * Emits definition
 */
const emit = defineEmits<{
  (e: "increment"): void;
}>();

function onIncrement() {
  emit("increment");
}
</script>

<template>
  <div class="p-4 bg-white border rounded shadow-sm space-y-3">
    <h3 class="text-lg font-medium text-gray-800">
      {{ props.title }}
    </h3>

    <p class="text-gray-700">
      Count:
      <span class="font-semibold text-emerald-600">
        {{ props.count }}
      </span>
    </p>

    <button
      class="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      @click="onIncrement"
    >
      Increment
    </button>
  </div>
</template>

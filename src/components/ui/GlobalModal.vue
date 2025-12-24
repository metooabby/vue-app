<script setup lang="ts">
const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <teleport to="body">
    <div
      v-if="props.open"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div class="bg-white w-96 rounded-lg shadow-lg p-4 space-y-4">
        <slot />

        <button
          class="px-3 py-1 bg-red-600 text-white rounded"
          @click="emit('close')"
        >
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

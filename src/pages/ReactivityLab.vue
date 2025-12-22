<script setup lang="ts">
import { ref, reactive, computed } from "vue";

/**
 * ref → primitive values
 */
const count = ref(0);

/**
 * reactive → objects
 */
const user = reactive({
  firstName: "Anurag",
  lastName: "Bhelsewale",
});

/**
 * computed → derived state
 */
const fullName = computed(() => {
  return `${user.firstName} ${user.lastName}`;
});

/**
 * methods
 */
function increment() {
  count.value++;
}
</script>

<template>
  <div class="max-w-2xl space-y-6">
    <h2 class="text-2xl font-semibold text-gray-800">
      Vue Reactivity Lab
    </h2>

    <!-- ref example -->
    <div class="p-4 bg-white border rounded shadow-sm space-y-2">
      <p class="text-gray-700">
        Count:
        <span class="font-semibold text-emerald-600">
          {{ count }}
        </span>
      </p>

      <button
        class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        @click="increment"
      >
        Increment
      </button>
    </div>

    <!-- reactive example -->
    <div class="p-4 bg-white border rounded shadow-sm space-y-3">
      <h3 class="text-lg font-medium">Reactive Object</h3>

      <input
        v-model="user.firstName"
        class="w-full px-3 py-2 border rounded"
        placeholder="First Name"
      />

      <input
        v-model="user.lastName"
        class="w-full px-3 py-2 border rounded"
        placeholder="Last Name"
      />
    </div>

    <!-- computed example -->
    <div class="p-4 bg-emerald-50 border border-emerald-200 rounded">
      <p class="text-gray-800">
        Full Name (computed):
        <span class="font-semibold">
          {{ fullName }}
        </span>
      </p>
    </div>
  </div>
</template>

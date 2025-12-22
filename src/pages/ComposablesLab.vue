<script setup lang="ts">
import { ref } from "vue"
import { useCounter } from '../composables/UseCounter';
import { useToggle } from '../composables/useToggle';
import { useDebounce } from '../composables/useDebounce';

const { count, increment, decrement, reset } = useCounter(0);
const { state: isOn, toggle } = useToggle();

const search = ref("");
const debouncedSearch = useDebounce(search.value, 800);

</script>

<template>
    <div class="max-w-xl space-y-8">
        <h2 class="text-2xl font-semibold">
            Composables Lab
        </h2>

        <!-- Counter -->
        <div class="p-4 bg-white border rounded shadow space-y-3">
            <h3 class="font-medium">useCounter</h3>

            <p>Count: {{ count }}</p>

            <div class="space-x-2">
                <button class="px-3 py-1 bg-emerald-600 text-white rounded" @click="increment">
                    +
                </button>
                <button class="px-3 py-1 bg-emerald-600 text-white rounded" @click="decrement">
                    -
                </button>
                <button class="px-3 py-1 bg-gray-200 rounded" @click="reset">
                    Reset
                </button>
            </div>
        </div>

        <!-- Toggle -->
        <div class="p-4 bg-white border rounded shadow space-y-3">
            <h3 class="font-medium">useToggle</h3>

            <p>Status:
                <span class="font-semibold">
                    {{ isOn ? "ON" : "OFF" }}
                </span>
            </p>

            <button class="px-3 py-1 bg-emerald-600 text-white rounded" @click="toggle">
                Toggle
            </button>
        </div>

        <!-- Debounce -->
        <div class="p-4 bg-white border rounded shadow space-y-3">
            <h3 class="font-medium">useDebounce</h3>

            <input v-model="search" class="w-full px-3 py-2 border rounded" placeholder="Type to debounce..." />

            <p class="text-sm text-gray-600">
                Debounced value:
                <span class="font-semibold">
                    {{ debouncedSearch }}
                </span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    open: boolean;
}>();
const emits = defineEmits<{
    (e: "close"): void;
}>();
</script>

<template>
    <div v-if="props.open" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="bg-white w-96 rounded-lg shadow-lg">
            <!-- Header -->
            <div class="px-4 py-3 border-b font-semibold">
                <slot name="header" />
            </div>

            <!-- Body -->
            <div class="p-4">
                <slot />
            </div>

            <!-- Footer -->
            <div class="px-4 py-3 border-t text-right">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
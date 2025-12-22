<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "../components/ui/Basecard.vue";
import BaseModal from "../components/ui/BaseModel.vue";
import BaseList from "../components/ui/BaseList.vue";
const isOpen = ref<boolean>(false);
const topics = ref<string[]>([
    "Default Slots",
    "Named Slots",
    "Scoped Slots",
]);
</script>

<template>
    <div class="max-w-xl space-y-6">
        <h2 class="text-2xl font-semibold">
            Slot Mastery
        </h2>

        <BaseCard>
            <p>This content is injected using a default slot.</p>
        </BaseCard>

        <button class="px-4 py-2 bg-emerald-600 text-white rounded" @click="isOpen = true">
            Open Modal
        </button>

        <BaseModal :open="isOpen" @close="isOpen = false">
            <template #header>
                Modal Header
            </template>

            <p>
                This is modal body content.
            </p>

            <template #footer>
                <button class="px-3 py-1 bg-gray-200 rounded mr-2" @click="isOpen = false">
                    Cancel
                </button>
                <button class="px-3 py-1 bg-emerald-600 text-white rounded" @click="isOpen = false">
                    Confirm
                </button>
            </template>
        </BaseModal>
        <BaseList :items="topics">
            <template #default="{ item, index }">
                <span class="font-medium">
                    {{ index + 1 }}. {{ item }}
                </span>
            </template>
        </BaseList>
    </div>
</template>

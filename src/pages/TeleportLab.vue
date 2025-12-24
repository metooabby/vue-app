<script setup lang="ts">
import { ref } from "vue";
import GlobalModal from "../components/ui/GlobalModal.vue";

const open = ref(false);
</script>

<template>
  <div class="max-w-md space-y-6">
    <h2 class="text-2xl font-semibold">
      Teleport Demo
    </h2>

    <button
      class="px-4 py-2 bg-emerald-600 text-white rounded"
      @click="open = true"
    >
      Open Modal
    </button>

    <GlobalModal :open="open" @close="open = false">
      <p>
        This modal is teleported to &lt;body&gt;.
      </p>
    </GlobalModal>
  </div>
</template>

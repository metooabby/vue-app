<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AsyncMessage = defineAsyncComponent(
  () => import("../components/ui/AsyncMessage.vue")
);
</script>

<template>
  <div class="max-w-md space-y-6">
    <h2 class="text-2xl font-semibold">
      Suspense Demo
    </h2>

    <Suspense>
      <template #default>
        <AsyncMessage />
      </template>

      <template #fallback>
        <p class="text-gray-500">
          Loading async content...
        </p>
      </template>
    </Suspense>
  </div>
</template>

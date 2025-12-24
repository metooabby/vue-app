<script setup lang="ts">
import AppHeader from "../layout/AppHeader.vue";
import AppSidebar from "../layout/AppSidebar.vue";
import AppFooter from "../layout/AppFooter.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <AppHeader />

    <div class="flex flex-1 overflow-hidden">
      <AppSidebar />

      <main class="flex-1 p-6 overflow-auto bg-gray-50 overflow-auto">
        <slot />
      </main>
    </div>
   <AppFooter />
  </div>
</template>
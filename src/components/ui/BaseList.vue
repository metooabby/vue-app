<script setup lang="ts">
const props = defineProps<{
  items: string[];
}>();
</script>

<template>
  <ul class="space-y-2">
    <li
      v-for="(item, index) in props.items"
      :key="index"
      class="p-2 bg-gray-50 border rounded"
    >
      <slot :item="item" :index="index" />
    </li>
  </ul>
</template>

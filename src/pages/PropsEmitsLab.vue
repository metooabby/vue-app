<script setup lang="ts">
import {ref} from 'vue';
import CounterCard from '../components/ui/CounterCard.vue'

const parentCount = ref(0);
function incrementFromChild() {
  parentCount.value ++
}

</script>

<template>
     <div class="max-w-xl space-y-6">
    <h2 class="text-2xl font-semibold text-gray-800">
      Props & Emits Lab
    </h2>

    <CounterCard
      title="Child Counter"
      :count="parentCount"  
      @increment="incrementFromChild"
    />

    <p class="text-gray-600">
      Parent controls the state.
    </p>
  </div>
</template>
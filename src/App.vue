<script setup lang="ts">
import AppLayout from "./components/layout/AppLayout.vue";
// import TemplateBasics from "./pages/TemplateBasics.vue"; //-- Step 3
// import ReactivityLab from "./pages/ReactivityLab.vue"; //-- Step 4
// import WatchLab from "./pages/WatchLab.vue"; //-- Step 5
// import FormsLab from "./pages/FormsLab.vue"; //-- Step 6
// import PropsEmitsLab from "./pages/PropsEmitsLab.vue"; //-- Step 7
// import SlotsLab from "./pages/SlotsLab.vue"; //-- Step 8
// import ComposablesLab from "./pages/ComposablesLab.vue"; //-- Step 9
import FetchLab from "./pages/FetchLab.vue"; //-- Step 10

</script>

<template>
  <main>
    <AppLayout>
      <FetchLab />
    </AppLayout>
  </main>
</template>

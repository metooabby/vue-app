<script setup lang="ts">
import DynamicForm from "../components/ui/DynamicForm.vue";
import type { FormSchema } from "../types/form";

const loginSchema: FormSchema = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
];

function handleSubmit(data: Record<string, string>) {
  console.log("Submitted data:", data);
}
</script>

<template>
  <div class="max-w-md space-y-6">
    <h2 class="text-2xl font-semibold">
      Dynamic Forms
    </h2>

    <DynamicForm
      :schema="loginSchema"
      @submit="handleSubmit"
    />
  </div>
</template>

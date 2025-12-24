<script setup lang="ts">
import { reactive } from "vue";
import type { FormSchema } from "../../types/form";

const props = defineProps<{
  schema: FormSchema;
}>();

const emit = defineEmits<{
  (e: "submit", data: Record<string, string>): void;
}>();

const formData = reactive<Record<string, string>>({});
const errors = reactive<Record<string, string>>({});

function validate() {
  let valid = true;

  props.schema.forEach((field) => {
    if (field.required && !formData[field.name]) {
      errors[field.name] = `${field.label} is required`;
      valid = false;
    } else {
      errors[field.name] = "";
    }
  });

  return valid;
}

function submit() {
  if (!validate()) return;
  emit("submit", { ...formData });
}
</script>

<template>
  <form
    class="space-y-5 bg-white p-6 border rounded shadow-sm"
    @submit.prevent="submit"
  >
    <div
      v-for="field in schema"
      :key="field.name"
      class="space-y-1"
    >
      <label class="text-sm font-medium text-gray-700">
        {{ field.label }}
      </label>

      <input
        v-model="formData[field.name]"
        :type="field.type"
        class="w-full px-3 py-2 border rounded"
      />

      <p v-if="errors[field.name]" class="text-sm text-red-600">
        {{ errors[field.name] }}
      </p>
    </div>

    <button
      type="submit"
      class="w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
    >
      Submit
    </button>
  </form>
</template>

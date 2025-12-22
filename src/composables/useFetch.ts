import { ref } from "vue";

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function execute() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      data.value = await response.json();
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    error,
    execute,
  };
}

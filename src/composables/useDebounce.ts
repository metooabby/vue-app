import { ref, watch } from "vue";

export function useDebounce<T>(value: T, delay = 500) {
    const debounced = ref(value) as { value: T };
    let timeout: number;
    watch(
        () => value,
        (newValue) => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                debounced.value = newValue;
            }, delay);
        },
        { immediate: true }
    );
    return debounced;
}
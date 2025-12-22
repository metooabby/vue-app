import { ref } from "vue";

export function useToggle(initial = false) {
    const state = ref(initial)
    function toggle() {
        state.value = !state.value
    }
    return {
        state,
        toggle,
    }
}


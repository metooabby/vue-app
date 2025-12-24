import type { Directive } from "vue";

const vClickOutside: Directive = {
    mounted(el, binding) {
        const handler = (event: MouseEvent) => {
            if (!el.contains(event.target as Node)) {
                binding.value(event);
            }
        };

        (el as any).__clickOutside__ = handler;
        document.addEventListener("click", handler);
    },

    unmounted(el) {
        document.removeEventListener(
            "click",
            (el as any).__clickOutside__
        );
    },
};

export default vClickOutside;

import type { Directive } from "vue";
import { nextTick } from "vue";

const vFocus: Directive = {
  mounted(el) {
    nextTick(() => {
      el.focus();
    });
  },
};

export default vFocus;

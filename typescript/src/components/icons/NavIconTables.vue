<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.0625 4.75H3.5625L2.375 5.9375V32.0625L3.5625 33.25H32.0625L33.25 32.0625V5.9375L32.0625 4.75ZM4.75 7.125H30.875V9.5H4.75V7.125ZM21.375 16.625H14.25V11.875H21.375V16.625ZM21.375 19V23.75H14.25V19H21.375ZM4.75 11.875H11.875V16.625H4.75V11.875ZM4.75 19H11.875V23.75H4.75V19ZM4.75 30.875V26.125H11.875V30.875H4.75ZM14.25 30.875V26.125H21.375V30.875H14.25ZM30.875 30.875H23.75V26.125H30.875V30.875ZM30.875 23.75H23.75V19H30.875V23.75ZM23.75 16.625V11.875H30.875V16.625H23.75Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavIconTables",
  props: {
    width: { type: Number, default: 38 },
    height: { type: Number, default: 38 },
  },
});
</script>

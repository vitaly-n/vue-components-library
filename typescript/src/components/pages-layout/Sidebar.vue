<template>
  <nav class="sidebar-container">
    <FirstMenu />

    <SecondMenu />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstMenu from "../pages-layout/FirstMenu.vue";
import SecondMenu from "../pages-layout/SecondMenu.vue";

export default defineComponent({
  name: "Sidebar",

  components: {
    FirstMenu,
    SecondMenu,
  },
});
</script>

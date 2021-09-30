<template>
  <div class="first-menu">
    <router-link to="/" class="logo-block">
      <img alt="Logo" src="../../assets/img/logo.png" />
    </router-link>

    <SidebarNavigation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarNavigation from "../pages-layout/SidebarNavigation.vue";

export default defineComponent({
  name: "FirstMenu",

  components: {
    SidebarNavigation,
  },
});
</script>

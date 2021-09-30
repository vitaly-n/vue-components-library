<template>
  <div class="second-menu">
    <router-link to="/" class="logo-link-text">
      <h2>UI Components</h2>
    </router-link>

    <SidebarInnerNavigation v-if="items" :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarInnerNavigation from "../pages-layout/SidebarInnerNavigation.vue";

export default defineComponent({
  name: "SecondMenu",
  components: {
    SidebarInnerNavigation,
  },

  computed: {
    innerMenu() {
      return {
        forms: [
          {
            name: "Inputs",
            to: "/forms/inputs",
          },
          {
            name: "Buttons",
            to: "/forms/buttons",
          },
        ],
        tables: [
          {
            name: "Base Table",
            to: "/tables/base-table",
          },
          {
            name: "Editable Table",
            to: "/tables/editable-table",
          },
        ],
        popups: [
          {
            name: "Popup",
            to: "/popups/popup",
          },
          {
            name: "Dropdown",
            to: "/popups/dropdown",
          },
          {
            name: "Tip Popover",
            to: "/popups/tippopover",
          },
        ],
      };
    },

    items() {
      if (
        this.$route &&
        this.$route.matched[0] &&
        this.$route.matched[0].name
      ) {
        return this.innerMenu[this.$route.matched[0].name.toLowerCase()];
      } else return [];
    },
  },
});
</script>

<style src="../sass/SecondMenu.sass" lang="sass" />

<template>
  <CurrentRouteDetails :withText="true" />

  <div class="route-inner-links">
    <router-link
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="menu-link"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentRouteDetails from "../pages-layout/CurrentRouteDetails.vue";

export default defineComponent({
  name: "SidebarInnerNavigation",
  components: {
    CurrentRouteDetails,
  },

  props: {
    items: Array,
  },
});
</script>

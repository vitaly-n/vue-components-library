<template>
  <div class="route-parent-name">
    <NavIconHome v-if="parentRouteName === 'Home'" />
    <NavIconForms v-if="parentRouteName === 'Forms'" />
    <NavIconTables v-if="parentRouteName === 'Tables'" />
    <NavIconPopups v-if="parentRouteName === 'Popups'" />
    <NavIconAbout v-if="parentRouteName === 'About'" />

    <span v-if="withText && parentRouteName">
      {{ parentRouteName }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteParentName } from "../../types";
import NavIconHome from "../icons/NavIconHome.vue";
import NavIconForms from "../icons/NavIconForms.vue";
import NavIconTables from "../icons/NavIconTables.vue";
import NavIconPopups from "../icons/NavIconPopups.vue";
import NavIconAbout from "../icons/NavIconAbout.vue";

export default defineComponent({
  name: "CurrentRouteDetails",
  components: {
    NavIconHome,
    NavIconForms,
    NavIconTables,
    NavIconPopups,
    NavIconAbout,
  },

  props: {
    withText: { type: Boolean, required: true },
  },

  computed: {
    parentRouteName(): RouteParentName {
      return this.$route.matched[0]
        ? this.$route.matched[0].name
        : this.$route.name;
    },
  },
});
</script>

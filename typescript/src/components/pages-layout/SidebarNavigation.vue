<template>
  <div class="navigation-menu">
    <router-link to="/" class="menu-link" title="Home">
      <NavIconHome />
      <div class="arrow"></div>
      <span>Home</span>
    </router-link>

    <router-link to="/forms" class="menu-link" title="Forms">
      <NavIconForms />
      <div class="arrow"></div>
      <span>Forms</span>
    </router-link>

    <router-link to="/tables" class="menu-link" title="Tables">
      <NavIconTables />
      <div class="arrow"></div>
      <span>Tables</span>
    </router-link>

    <router-link to="/popups" class="menu-link" title="Popups">
      <NavIconPopups />
      <div class="arrow"></div>
      <span>Popups</span>
    </router-link>

    <router-link to="/about" class="menu-link" title="About">
      <NavIconAbout />
      <div class="arrow"></div>
      <span>About</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavIconHome from "../icons/NavIconHome.vue";
import NavIconForms from "../icons/NavIconForms.vue";
import NavIconTables from "../icons/NavIconTables.vue";
import NavIconPopups from "../icons/NavIconPopups.vue";
import NavIconAbout from "../icons/NavIconAbout.vue";

export default defineComponent({
  name: "SidebarNavigation",

  components: {
    NavIconHome,
    NavIconForms,
    NavIconTables,
    NavIconPopups,
    NavIconAbout,
  },
});
</script>

<style scoped src="../sass/SidebarNavigation.sass" lang="sass" />

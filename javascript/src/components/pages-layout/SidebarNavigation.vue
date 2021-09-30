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

<script>
import NavIconHome from '@/components/icons/NavIconHome'
import NavIconForms from '@/components/icons/NavIconForms'
import NavIconTables from '@/components/icons/NavIconTables'
import NavIconPopups from '@/components/icons/NavIconPopups'
import NavIconAbout from '@/components/icons/NavIconAbout'

export default {
  name: 'SidebarNavigation',
  components: {
    NavIconHome,
    NavIconForms,
    NavIconTables,
    NavIconPopups,
    NavIconAbout,
  },
}
</script>

<style scoped src="../sass/SidebarNavigation.sass" lang="sass" />

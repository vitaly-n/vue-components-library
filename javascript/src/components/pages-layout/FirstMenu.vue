<template>
  <div class="first-menu">
    <router-link to="/" class="logo-block">
      <img alt="Logo" src="../../assets/img/logo.png" />
    </router-link>

    <SidebarNavigation />
  </div>
</template>

<script>
import SidebarNavigation from '@/components/pages-layout/SidebarNavigation'

export default {
  name: 'FirstMenu',

  components: {
    SidebarNavigation,
  },
}
</script>

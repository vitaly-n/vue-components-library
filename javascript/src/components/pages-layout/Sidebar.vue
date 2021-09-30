<template>
  <nav class="sidebar-container">
    <FirstMenu />

    <SecondMenu />
  </nav>
</template>

<script>
import FirstMenu from '@/components/pages-layout/FirstMenu'
import SecondMenu from '@/components/pages-layout/SecondMenu'

export default {
  name: 'Sidebar',
  components: {
    FirstMenu,
    SecondMenu,
  },
}
</script>

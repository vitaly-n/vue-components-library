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

<script>
import NavIconHome from '@/components/icons/NavIconHome'
import NavIconForms from '@/components/icons/NavIconForms'
import NavIconTables from '@/components/icons/NavIconTables'
import NavIconPopups from '@/components/icons/NavIconPopups'
import NavIconAbout from '@/components/icons/NavIconAbout'

export default {
  name: 'CurrentRouteDetails',
  components: {
    NavIconHome,
    NavIconForms,
    NavIconTables,
    NavIconPopups,
    NavIconAbout,
  },

  props: ['withText'],

  computed: {
    parentRouteName() {
      return this.$route.matched[0]
        ? this.$route.matched[0].name
        : this.$route.name
    },
  },
}
</script>

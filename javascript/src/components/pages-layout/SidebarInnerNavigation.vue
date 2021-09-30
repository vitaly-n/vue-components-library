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

<script>
import CurrentRouteDetails from '@/components/pages-layout/CurrentRouteDetails'

export default {
  name: 'SidebarInnerNavigation',
  components: {
    CurrentRouteDetails,
  },

  props: {
    items: Array,
  },
}
</script>

<template>
  <RouteTabNav v-if="inputs.length" :tabs="inputs" :selected="selected">
    <transition name="fade-slide" mode="out-in">
      <router-view />
    </transition>
  </RouteTabNav>
</template>

<script>
import RouteTabNav from '@/components/pages-layout/RouteTabNav'

export default {
  name: 'Forms Inputs',

  components: {
    RouteTabNav,
  },

  data() {
    return {
      inputs: ['Base Input', 'Base Select'],
    }
  },

  computed: {
    selected() {
      return this.$route.name
    },
  },
}
</script>

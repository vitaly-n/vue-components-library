<template>
  <div class="application" :class="{ 'with-sidebar': !homeRouteActive }">
    <Sidebar />

    <Header />

    <div class="content-container">
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/pages-layout/Sidebar'
import Header from '@/components/pages-layout/Header'

export default {
  components: {
    Sidebar,
    Header,
  },

  computed: {
    homeRouteActive() {
      return this.$route.name === 'Home' || this.$route.name === 'About'
    },
  },
}
</script>

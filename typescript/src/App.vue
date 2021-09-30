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

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../src/components/pages-layout/Sidebar.vue";
import Header from "../src/components/pages-layout/Header.vue";

export default defineComponent({
  name: "App",

  components: {
    Sidebar,
    Header,
  },
});
</script>

//
<style lang="scss">
// #app {
// 	font-family: Avenir, Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
// }

// #nav {
// 	padding: 30px;

// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }
//
</style>

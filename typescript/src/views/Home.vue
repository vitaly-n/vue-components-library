<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/jackie-chan-logo.png" />
    <Greetings msg="UI Components" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Greetings from "@/components/Greetings.vue";

export default defineComponent({
  name: "Home",

  components: {
    Greetings,
  },
});

// This part of code is from JS version, don't know yet why we need it
//------------------------------------------------------------------
//  data() {
//     return {
//       resources: [],
//     }
//   },
//   beforeMount() {
//     // Need to turn on json-server with 'yarn backend' in separate console for API to work
//     // this.getResources()
//   },
//   methods: {
//     async getResources() {
//       const res = await fetch('http://localhost:5000/resources')
//       const data = await res.json()
//       console.log('API (json-server) resources: ', data)
//       this.resources = data
//     },
//   },
//-------------------------------------------------------------------
</script>

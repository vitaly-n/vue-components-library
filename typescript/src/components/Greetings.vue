<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Library of tested components for Vue.js</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Greetings extends Vue {
  msg!: string;
}
</script>

<style scoped src="./sass/Greetings.sass" lang="sass" />

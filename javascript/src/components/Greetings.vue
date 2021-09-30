<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Library of tested components for Vue.js</p>
  </div>
</template>

<script>
export default {
  name: 'Greetings',
  props: ['msg'],
}
</script>

<style scoped src="./sass/Greetings.sass" lang="sass" />

<template>
  <List @change="filterInputChangeHandler" />

  {{ selected }}
</template>

<script>
import List from './List'

export default {
  name: 'ListTestWrapper',

  components: { List },

  data() {
    return {
      selected: '',
    }
  },

  methods: {
    filterInputChangeHandler(evt) {
      this.selected = evt.target.value
    },
  },
}
</script>

<style></style>

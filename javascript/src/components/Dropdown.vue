<template>
  <div class="dropdown aligned-right" :class="{ opened: opened }">
    <div class="dropdown-overlay" @click="toggle" />

    <div class="dropdown-trigger" @click="toggle">
      <slot name="dropdownTrigger" />
    </div>

    <div class="dropdown-content" @click="toggle">
      <slot name="dropdownContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',

  data() {
    return {
      opened: false,
    }
  },

  methods: {
    toggle() {
      this.opened = !this.opened
    },
  },
}
</script>

<style src="./sass/Dropdown.sass" lang="sass" />

<template>
  <div>
    <ul class="nav-tabs">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: tab === selected }"
          :to="{ name: tab }"
        >
          {{ tab }}
        </router-link>
      </li>
    </ul>

    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },

    selected: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass" src="@/components/sass/TabNav.sass" />

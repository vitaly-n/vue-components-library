<template>
  <div>
    <h2>Base Select Page</h2>

    <BaseSelect
      class="base-select-page"
      placeholder="select option"
      label="Select something"
      v-model="selectInfo"
      :options="selectOptions"
    />
  </div>
</template>

<script>
export default {
  name: 'Base Select Page',

  data() {
    return {
      selectInfo: '',
      selectOptions: ['option one', 'option two', 'third option'],
    }
  },
}
</script>

<style>
.base-select-page {
  width: 40%;
}
</style>

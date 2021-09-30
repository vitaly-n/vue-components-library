<template>
  <div>
    <h2>Base Input Page</h2>

    <BaseInput
      v-model="inputInfo"
      placeholder="enter email"
      label="email"
      type="email"
      withLabel
      vertical
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInputPage',

  data() {
    return {
      inputInfo: '',
    }
  },
}
</script>

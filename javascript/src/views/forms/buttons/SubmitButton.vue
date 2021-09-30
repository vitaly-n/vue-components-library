<template>
  <button class="button primary-btn" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Submit Button',

  props: {
    label: {
      type: String,
      default: 'SUBMIT',
    },
    onClick: {
      type: Function,
      requered: true,
    },
  },
}
</script>

<style>
button:focus {
  outline: none;
}

button {
  font-family: 'Mont';
}

.button {
  padding: 10px 20px 8px;
  border-radius: 10px;
  border: 0;
  margin: 5px 0;
}

.primary-btn {
  background-color: var(--primary);
  color: white;
  font-size: 16px;
  font-weight: 500;
}
</style>

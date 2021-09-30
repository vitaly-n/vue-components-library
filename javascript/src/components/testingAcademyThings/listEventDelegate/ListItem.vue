<template>
  <li v-for="(item, i) in items" :key="item.id">
    <label>
      <input 
        :click="$emit('event', $event.target)"
        type="radio" name="techs" :value="item.name" :checked="i === 0" />
      {{ item.name }}
    </label>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  data() {
    return {
      items: [
        {
          id: 123,
          name: 'Javascript',
        },
        {
          id: 123,
          name: 'Typescript',
        },
        {
          id: 123,
          name: 'PWA',
        },
        {
          id: 123,
          name: 'Node.js',
        },
      ],
    }
  },
}
</script>

<style></style>

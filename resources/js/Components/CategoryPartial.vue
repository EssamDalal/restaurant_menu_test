<template>
  <li v-for="subcategory in title" :key="subcategory">
    {{ subcategory.name }}
  </li>
</template>

<script>
export default {
  setup() {},
};
</script>

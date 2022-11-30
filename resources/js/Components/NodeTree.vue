<template>
  <span
    class="
      text-2xl text-center
      font-serif font-bold
      mb-2
      text-gray-800
      capitalize
    "
    >{{ node.name }}
    <span class="text-yellow-900"> {{ node.discount }} % </span></span
  >

  <ul v-if="node.items && node.items.length">
    <li
      style="list-style-image: url('image/menu_list.png')"
      class="text-base"
      v-for="item in node.items"
      :key="item.name"
    >
      {{ item.name }} {{ item.discount }} %
    </li>
  </ul>

  <ul v-if="node.n_level_subcategories && node.n_level_subcategories.length">
    <node
      v-for="child in node.n_level_subcategories"
      :key="child.name"
      :node="child"
    >
    </node>
  </ul>
</template>

<script>
export default {
  name: "node",

  props: {
    node: Object,
  },
};
</script>

<template>
  <li class="node-tree">
    <span class="label">{{ node.name }} {{ node.discount }} %</span>

    <ul v-if="node.n_level_subcategories && node.n_level_subcategories.length">
      <node
        v-for="child in node.n_level_subcategories"
        :key="child.name"
        :node="child"
      >
      </node>
    </ul>
    <ul v-if="node.items && node.items.length">
      <node v-for="child in node.items" :key="child.name" :node="child"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",

  props: {
    node: Object,
  },
};
</script>

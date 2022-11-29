<template>
  <li class="node-tree">
    <span class="label">{{ node.name }}</span>

    <ul v-if="node.nLevelSubcategories && node.nLevelSubcategories.length">
      <node
        v-for="child in node.nLevelSubcategories"
        :key="child.name"
        :node="child"
      ></node>
    </ul>
  </li>
</template>

<script>
import Node from "@/Components/NodeTree";
export default {
  name: "node",
  components: {
    Node,
  },
  props: {
    node: Object,
  },
};
</script>

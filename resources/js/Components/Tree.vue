<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="tree"></node-tree>
    </ul>
  </div>
</template>

<script>
import NodeTree from "@/Components/NodeTree.vue";

export default {
  props: {
    tree: Object,
  },
  components: {
    NodeTree,
  },
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>

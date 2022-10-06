<template>
  <ul style="height: fit-content" v-for="node in treeData" :key="node.key">
    <TreeItem :node="node" :key="node.key" />
  </ul>
</template>
<script>
import { defineComponent } from "vue";
import TreeItem from "@/atoms/TreeItem/TreeItem.vue";

export default defineComponent({
  name: "DefaultTree",
  props: {
    treeData: {
      required: true,
    },
  },
  components: {
    TreeItem,
  },
});
</script>

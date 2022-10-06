<template>
  <div>
    <div v-show="showChildren" @click="toggleShow()">
      <span :style="getStyle()">
        {{ node }}
      </span>
    </div>
    <ul
      style="
        paddingleft: 15px;
        height: fit-content;
        borderleft: 1px solid black;
      "
    >
      <Tree v-if="showChildren" :treeData="node" />
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TreeItem",
  data() {
    return {
      showChildren: false,
    };
  },
  props: {
    node: {
      required: true,
    },
  },
  methods: {
    toggleShow() {
      if (this.node.children) {
        this.showChildren = !this.showChildren;
      }
    },
    getStyle() {
      if (this.showChildren && this.node.children) {
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 550,
          fontSize: "18px",
        };
      } else if (this.node.children) {
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 500,
          fontSize: "18px",
        };
      } else {
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          fontWeight: 500,
          fontSize: "18px",
        };
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.default {
  width: 200px;
}
.danger {
  width: 200px;
}
.success {
  width: 200px;
}
</style>

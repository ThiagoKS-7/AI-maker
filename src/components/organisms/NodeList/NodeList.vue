<template>
  <div class="nodes">
    <div
      v-for="item in sidebarNodes"
      :key="item.id"
      :class="item.class"
      :draggable="true"
      @click="onNodeClick(item)"
      @dragstart="onDragStart($event, item.type)"
    >
      <DefaultNode :img="item.img" :name="item.nome" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DefaultNode from "@/components/molecules/DefaultNode/DefaultNode.vue";

export default defineComponent({
  name: "NodeList",
  props: {
    sidebarNodes: {
      required: true,
    },
  },
  components: {
    DefaultNode,
  },
  methods: {
    onDragStart(event, nodeType) {
      if (event.dataTransfer) {
        event.dataTransfer.setData("application/vueflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      }
    },
    onNodeClick(item) {
      this.$emit("onNodeClick", item);
    },
  },
});
</script>
<style lang="scss" scoped>
.nodes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>

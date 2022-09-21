<template>
  <aside>
    <div class="description">Exemplos de Nodes</div>
    <div class="nodes">
      <div
        class="vue-flow__node-input test"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        Input Node
      </div>
      <div
        class="vue-flow__node-default"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        Default Node
      </div>
      <div
        class="vue-flow__node-output"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        Output Node
      </div>
    </div>
  </aside>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarTest",
  methods: {
    onDragStart(event, nodeType) {
      if (event.dataTransfer) {
        event.dataTransfer.setData("application/vueflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.description {
  font-size: 25px;
}
.nodes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>

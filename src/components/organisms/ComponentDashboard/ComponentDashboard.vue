<script setup>
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  VueFlow,
  useVueFlow,
} from "@braks/vue-flow";
import Sidebar from "@/components/molecules/ComponentSideBar/ComponentSideBar.vue";

let id = 0;
const getId = () => `dndnode_${id++}`;

const { onConnect, nodes, edges, addEdges, addNodes, viewport, project } =
  useVueFlow({
    defaultZoom: 0.7,
    maxZoom: 1.5,
    minZoom: 0.5,
  });
const onDragOver = (event) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

onConnect((params) => addEdges([params]));

const onDrop = (event) => {
  const type = event.dataTransfer?.getData("application/vueflow");
  const position = project({ x: event.clientX - 40, y: event.clientY - 18 });
  const newNode = {
    id: getId(),
    type,
    position,
    label: `${type} node`,
    animated: true,
  };
  addNodes([newNode]);
};
</script>

<template>
  <div class="dndflow mask" @drop="onDrop">
    <VueFlow @dragover="onDragOver" :auto-connect="connector">
      <MiniMap />
      <Controls />
      <Background :variant="BackgroundVariant.Dots" />
    </VueFlow>
    <Sidebar />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentDashboard",
});
</script>
<style lang="scss" scoped>
.mask {
  background-color: #080b11;
  opacity: 0.8;
  aside {
    opacity: 1;
  }
}
</style>

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
import TableNode from "@/components/atoms/TableNode/TableNode.vue";
import { markRaw } from "vue";
let id = 0;
const getId = (type) => `${type[0]}${id++}`;

const {
  onConnect,
  nodes,
  edges,
  addEdges,
  addNodes,
  viewport,
  project,
  nodeTypes,
} = useVueFlow({
  defaultZoom: 0.7,
  maxZoom: 1.5,
  minZoom: 0.5,
  elements: [
    {
      id: "1",
      label: "CSV Table",
      type: "tI",
    },
  ],
  nodeTypes: {
    tI: markRaw(TableNode),
  },
});
const onDragOver = (event) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};

onConnect((params) => {
  addEdges([{ ...params, animated: true, style: { stroke: "cyan" } }]);
});

const onDrop = (event) => {
  const type = event.dataTransfer?.getData("application/vueflow");
  console.log(type);
  const position = project({ x: event.clientX - 40, y: event.clientY - 18 });
  const newNode = {
    id: getId(type),
    type,
    position,
    label: `${type} node`,
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
    <Sidebar :node="nodes" />
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

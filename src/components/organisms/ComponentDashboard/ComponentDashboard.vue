<script setup>
import TableNode from "@/components/atoms/TableNode/TableNode.vue";
import FileNode from "@/components/atoms/FileNode/FileNode.vue";
import ObjDetectionNode from "@/components/atoms/ObjDetectionNode/ObjDetectionNode.vue";
import DefaultOutputNode from "@/components/atoms/DefaultOutputNode/DefaultOutputNode.vue";
import OcrNode from "@/components/atoms/OcrNode/OcrNode.vue";
import {
  Background,
  BackgroundVariant,
  MiniMap,
  VueFlow,
  useVueFlow,
} from "@braks/vue-flow";
import { defineComponent } from "vue";
import Sidebar from "@/components/molecules/ComponentSideBar/ComponentSideBar.vue";
import { useStore } from "@/store";
import { markRaw } from "vue";

let id = 0;
const store = useStore();
const getId = (type) => `${type[0]}${type[1]}${id++}`;

const { onConnect, addEdges, nodes, addNodes, project } = useVueFlow({
  defaultZoom: 0.9,
  maxZoom: 1.4,
  minZoom: 0.6,
  nodeTypes: {
    tD: markRaw(TableNode),
    fD: markRaw(FileNode),
    oD: markRaw(ObjDetectionNode),
    ocr: markRaw(OcrNode),
    oN: markRaw(DefaultOutputNode),
  },
});
const onDragOver = (event) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};
onConnect((params) => {
  let con = "#" + params.source[2] + params.target[2];
  addEdges([
    {
      ...params,
      animated: true,
      style: {
        stroke: "cyan",
        "stroke-width": "3px",
        filter: "drop-shadow(0 0 0.4em lightblue)",
      },
    },
  ]);
  store.commit("pushConnection", con);
});
const onDrop = (event) => {
  const type = event.dataTransfer?.getData("application/vueflow");
  const position = project({ x: event.clientX - 40, y: event.clientY - 18 });
  const newNode = {
    id: getId(type),
    type,
    position,
    label: `${type} node`,
  };
  addNodes([newNode]);
  store.commit("setNodeList", nodes);
};
</script>
<script>
export default {
  name: "ComponentDashboard",
  components: {
    Sidebar,
  },
  props: {
    sidebarNodes: {
      required: true,
    },
  },
};
</script>
<template>
  <div class="dndflow mask" @drop="onDrop">
    <VueFlow
      @dragover="onDragOver"
      :auto-connect="connector"
      :nodes="$store.getters.getNodeList"
    >
      <MiniMap />
      <Controls />
      <Background :variant="BackgroundVariant.Dots" />
    </VueFlow>
    <Sidebar
      :sidebarNodes="sidebarNodes"
      @compile="$emit('compile', $event)"
      @removeOne="$emit('removeOne', $event)"
      @clearAll="$emit('clearAll', $event)"
    />
  </div>
</template>
<style lang="scss" scoped>
.mask {
  background-color: #080b11;
  opacity: 0.8;
  aside {
    opacity: 1;
  }
  @media only screen and (min-width: 1100px) {
    height: 81.5vh;
  }
}
</style>

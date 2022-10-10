<script setup>
import TableNode from "@/components/atoms/TableNode/TableNode.vue";
import FileNode from "@/components/atoms/FileNode/FileNode.vue";
import ObjDetectionNode from "@/components/atoms/ObjDetectionNode/ObjDetectionNode.vue";
import {
  Background,
  BackgroundVariant,
  MiniMap,
  VueFlow,
  useVueFlow,
} from "@braks/vue-flow";
import { markRaw } from "vue";
let id = 0;
const getId = (type) => `${type[0]}${type[1]}${id++}`;

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
  nodeTypes: {
    tD: markRaw(TableNode),
    fD: markRaw(FileNode),
    oD: markRaw(ObjDetectionNode),
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
    <Sidebar
      :node="nodes"
      :sidebarNodes="sidebarNodes"
      @compile="compile()"
      @removeOne="removeOne()"
      @clearAll="clearAll()"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Sidebar from "@/components/molecules/ComponentSideBar/ComponentSideBar.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ComponentDashboard",
  components: {
    Sidebar,
  },
  data() {
    return {
      nodeList: [],
      store: "",
    };
  },
  created() {
    this.store = useStore();
  },
  mounted() {
    this.nodeList = this.nodes;
  },
  props: {
    sidebarNodes: {
      required: true,
    },
  },
  methods: {
    checkNodeType(i) {
      if (
        this.nodeList[i].handleBounds.source == undefined &&
        this.nodeList[i].handleBounds.target
      ) {
        if (this.compiler[this.compiler.length - 1] != "*") {
          this.compiler += "*";
        }
      } else {
        if (this.compiler[this.compiler.length - 1] != "*") {
          this.compiler +=
            this.nodeList[i].handleBounds.source[0].id.split("__")[0];
        }
      }
    },
    compile() {
      this.compiler = "";
      for (let i = 0; i < this.nodeList.length; i++) {
        this.checkNodeType(i);
      }
      console.log(this.compiler);
    },
    removeOne() {
      this.nodeList.pop();
    },
    clearAll() {
      while (this.nodeList.length != 0) {
        this.nodeList.pop();
      }
    },
    back() {
      return this.$router.push("/");
    },
  },
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

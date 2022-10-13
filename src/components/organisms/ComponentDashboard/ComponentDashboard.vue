<script setup>
import TableNode from "@/components/atoms/TableNode/TableNode.vue";
import FileNode from "@/components/atoms/FileNode/FileNode.vue";
import ObjDetectionNode from "@/components/atoms/ObjDetectionNode/ObjDetectionNode.vue";
import DefaultOutputNode from "@/components/atoms/DefaultOutputNode/DefaultOutputNode.vue";
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
const { onConnect, addEdges, addNodes, project } = useVueFlow({
  defaultZoom: 0.9,
  maxZoom: 1.4,
  minZoom: 0.6,
  nodeTypes: {
    tD: markRaw(TableNode),
    fD: markRaw(FileNode),
    oD: markRaw(ObjDetectionNode),
    oN: markRaw(DefaultOutputNode),
  },
});
const onDragOver = (event) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};
const store = useStore();
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
      store: "",
      message: "",
      form: {
        nodeList: [],
        cons: "",
      },
    };
  },
  created() {
    this.store = useStore();
  },
  mounted() {
    this.store.commit("setNodeList", this.nodes);
    this.getData();
  },
  props: {
    sidebarNodes: {
      required: true,
    },
  },
  methods: {
    getData() {
      this.form.nodeList = this.store.getters.getNodeList;
      this.form.cons = document.getElementsByClassName("vue-flow__edge-path");
    },
    checkNodeType(i) {
      const noOutput = this.compiler[this.compiler.length - 1] != "*";
      if (
        this.form.nodeList[i].handleBounds.source == undefined &&
        this.form.nodeList[i].handleBounds.target
      ) {
        if (noOutput) {
          this.compiler += "*";
        }
      } else {
        if (noOutput) {
          this.compiler +=
            this.form.nodeList[i].handleBounds.source[0].id.split("__")[0];
        }
      }
    },
    checkExceptions() {
      const noOutput = this.compiler[this.compiler.length - 1] != "*";
      const missingConnection =
        this.store.getters.getConnections.length / 3 ===
          this.form.nodeList.length - 1 &&
        this.store.getters.getConnections.length / 3 == 2 &&
        this.form.nodeList.length < 3;
      if (noOutput) {
        this.store.commit("increaseException");
        this.message = "É obrigatório usar uma output!";
        console.log(this.message);
      } else if (missingConnection) {
        this.store.commit("increaseException");
        this.message = "É obrigatório conectar todas as nodes no flow! 1";
        console.log(this.message);
      } else {
        this.store.commit("clearException");
      }
    },
    changeStroke(color) {
      for (let i = 0; i <= this.form.nodeList.length; i++) {
        this.form.cons[
          i
        ].style.cssText = `stroke: ${color}; stroke-width:6px;filter: drop-shadow(0 0 0.4em ${color});`;
      }
    },
    validateCompilation() {
      for (let i = 0; i < this.form.nodeList.length; i++) {
        this.checkNodeType(i);
      }
      this.checkExceptions();
      if (this.store.getters.getExceptions == 0) {
        this.store.commit("setReady", true);
        this.changeStroke("lime");
      } else {
        this.store.commit("setReady", false);
        this.changeStroke("red");
      }
    },
    compile() {
      this.compiler = "";
      this.store.commit("clearException");
      this.validateCompilation();
    },
    removeOne() {
      this.store.commit("removeOne");
    },
    clearAll() {
      this.store.commit("clearNodeList");
      this.store.commit("clearException");
      this.store.commit("clearConnections");
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

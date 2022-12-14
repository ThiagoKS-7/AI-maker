<script setup lang="ts">
import TableNode from "@/components/atoms/TableNode/TableNode.vue";
import FileNode from "@/components/atoms/FileNode/FileNode.vue";
import ObjDetectionNode from "@/components/atoms/ObjDetectionNode/ObjDetectionNode.vue";
import SkDecTreeNode from "@/components/atoms/SkDecTreeNode/SkDecTreeNode.vue";
import DefaultOutputNode from "@/components/atoms/DefaultOutputNode/DefaultOutputNode.vue";
import OcrNode from "@/components/atoms/OcrNode/OcrNode.vue";
import {
  Background,
  BackgroundVariant,
  MiniMap,
  VueFlow,
  useVueFlow,
  Controls,
} from "@braks/vue-flow";
import { markRaw } from "vue";
import { useStore } from "@/store";

let id = 0;
const getId = (type: any) => `${type[0]}${type[1]}${id++}`;
const store = useStore();

const { onConnect, addEdges, nodes, addNodes, project } = useVueFlow({
  defaultZoom: 0.9,
  maxZoom: 1.4,
  minZoom: 0.6,
  nodeTypes: {
    tD: markRaw(TableNode),
    dT: markRaw(SkDecTreeNode),
    fD: markRaw(FileNode),
    oD: markRaw(ObjDetectionNode),
    ocr: markRaw(OcrNode),
    oN: markRaw(DefaultOutputNode),
  },
});
const onDragOver = (event: any) => {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
};
onConnect((params) => {
  validateConnection(params);
});
const validateConnection = (params: any) => {
  let isSource = params.sourceHandle === "fD__handle-bottom";
  let haveRightTarget = params.targetHandle === "oD__handle-top";
  if (isSource && haveRightTarget) {
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
  } else {
    const doc: any = document.getElementById("ocr__handle-top");
    doc.style.cursor = "not-allowed";
    addEdges([
      {
        ...params,
        animated: true,
        style: {
          stroke: "red",
          "stroke-width": "3px",
          filter: "drop-shadow(0 0 0.4em red)",
        },
      },
    ]);
    store.commit("increaseException");
  }
};
const onDrop = (event: any) => {
  if (event.dataTransfer) {
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
  } else {
    const position = project({ x: 40, y: 18 });
    const newNode = {
      id: getId(event.type),
      type: event.type,
      position,
      label: `${event.type} node`,
    };
    addNodes([newNode]);
    store.commit("setNodeList", nodes);
  }
};
</script>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/molecules/ComponentSideBar/ComponentSideBar.vue";
import DefaultModal from "@/components/atoms/DefaultModal/DefaultModal.vue";
import DefaultInput from "@/components/atoms/DefaultInput/DefaultInput.vue";
import Button from "@/components/atoms/DefaultButton/DefaultButton.vue";
export default defineComponent({
  name: "ComponentDashboard",
  components: {
    Sidebar,
    DefaultModal,
    Button,
    DefaultInput,
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
    sidebarNodes: {
      required: true,
    },
  },
  data() {
    return {
      width: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
});
</script>

<template>
  <div class="dndflow mask" @drop="onDrop">
    <VueFlow
      @dragover="onDragOver"
      auto-connect
      :nodes="$store.getters.getNodeList"
    >
      <div v-show="width >= 500">
        <MiniMap />
      </div>
      <Controls />
      <Background :variant="BackgroundVariant.Dots" />
    </VueFlow>
    <Sidebar
      :sidebarNodes="sidebarNodes"
      @compile="$emit('compile', $event)"
      @onNodeClick="onDrop($event)"
      @removeOne="$emit('removeOne', $event)"
      @clearAll="$emit('clearAll', $event)"
    />
    <DefaultModal
      :modal="$store.getters.getNameModal"
      title="Novo Arquivo:"
      @closeModal="$emit('closeModal', $event)"
    >
      <form>
        <v-row sm="12">
          <div style="margin-top: 2em">
            <DefaultInput
              type="text"
              newStyle="large"
              label="Nome do seu arquivo"
              placeholder="Digite o nome do seu arquivo"
              @change="$emit('change-file', $event)"
            />
          </div>
        </v-row>
        <footer class="nameModal-footer">
          <Button
            class="btn"
            title="Cancelar"
            type="submit"
            newStyle="hover-red"
            @click="$emit('closeModal', $event)"
          />
          <Button
            class="btn"
            title="Confirmar"
            type="submit"
            @click="$emit('click-name-confirm', $event)"
          />
        </footer>
      </form>
    </DefaultModal>
  </div>
</template>
<style lang="scss" scoped>
.mask {
  background-color: #080b11;
  opacity: 0.8;
  aside {
    opacity: 1;
  }
  @media only screen and (min-width: 1100px) and (max-width: 1769px) {
    height: 72vh;
  }
  @media only screen and (min-width: 1770px) {
    height: 81.3vh;
  }
}

.nameModal-footer {
  display: flex;
  margin-top: 3.7em;
  justify-content: flex-end;

  .btn {
    padding: 0 10px;
  }
}
</style>

<template>
  <div class="dash-wrapper">
    <ComponentDashboard :sidebarNodes="sidebarNodes" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ComponentDashboard from "@/components/organisms/ComponentDashboard/ComponentDashboard.vue";
import TableIcon from "@/assets/dashboard/tableNode.svg";
import FileIcon from "@/assets/dashboard/fileNode.svg";
import OdIcon from "@/assets/dashboard/odNode.svg";

export default defineComponent({
  name: "DashboardView",
  components: {
    ComponentDashboard,
  },
  data() {
    return {
      sidebarNodes: [],
    };
  },
  mounted() {
    this.getSidebarNodes();
  },
  methods: {
    getSidebarNodes() {
      this.sidebarNodes = [
        {
          id: 0,
          nome: "Input Node",
          type: "input",
          img: null,
          class: "vue-flow__node-input",
        },
        {
          id: 1,
          nome: "Table Data (.csv/.xls)",
          type: "tD",
          img: TableIcon,
          class: "vue-flow__node-input",
        },
        {
          id: 2,
          nome: "File Data",
          type: "fD",
          img: FileIcon,
          class: "vue-flow__node-input",
        },
        {
          id: 3,
          nome: "Default Node",
          type: "default",
          img: null,
          class: "vue-flow__node-default",
        },
        {
          id: 4,
          nome: "YOLOv3 Obj Detection",
          type: "oD",
          img: OdIcon,
          class: "vue-flow__node-default",
        },
        {
          id: 5,
          nome: "Output Node",
          type: "output",
          img: null,
          class: "vue-flow__node-output",
        },
      ];
    },
  },
});
</script>
<style lang="scss" scoped>
.dash-wrapper {
  height: 100%;
}
</style>

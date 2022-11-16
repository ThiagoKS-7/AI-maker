<template>
  <div class="dash-wrapper">
    <div class="ldr_wrapper" v-show="loader">
      <div class="loader"></div>
      <div class="loader2"></div>
      <h4 class="ldr_text">Loading...</h4>
    </div>
    <ComponentDashboard
      :sidebarNodes="sidebarNodes"
      @compile="compile()"
      @removeOne="removeOne()"
      @clearAll="clearAll()"
    />

    {{ nodeList }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ComponentDashboard from "@/components/organisms/ComponentDashboard/ComponentDashboard.vue";
import TableIcon from "@/assets/dashboard/tableNode.svg";
import FileIcon from "@/assets/dashboard/fileNode.svg";
import OdIcon from "@/assets/dashboard/odNode.svg";
import OutIcon from "@/assets/dashboard/outNode.svg";
import OcrIcon from "@/assets/dashboard/ocrNode.svg";
import DecIcon from "@/assets/dashboard/treeNode.svg";
import { useStore } from "@/store";
import { mapState } from "vuex";

export default defineComponent({
  name: "DashboardView",
  components: {
    ComponentDashboard,
  },
  data() {
    return {
      sidebarNodes: [],
      message: "",
      form: {
        cons: "",
      },
    };
  },
  mounted() {
    this.getSidebarNodes();
    this.getData();
  },
  computed: mapState({
    loader: (state) => state.loader,
    nodeList: (state) => state.nodeList,
    exceptions: (state) => state.exceptions,
    connections: (state) => state.connections,
  }),
  methods: {
    getSidebarNodes() {
      this.sidebarNodes = [
        {
          id: 0,
          nome: "Text Data",
          type: "input",
          img: OcrIcon,
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
          nome: "SkLearn - Decision Tree",
          type: "default",
          img: DecIcon,
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
          type: "oN",
          img: OutIcon,
          class: "vue-flow__node-output",
        },
      ];
    },
    getData() {
      this.form.cons = document.getElementsByClassName("vue-flow__edge-path");
    },
    checkNodeType(i) {
      const noOutput = this.compiler[this.compiler.length - 1] != "*";
      if (
        this.nodeList[i].handleBounds.source == undefined &&
        this.nodeList[i].handleBounds.target
      ) {
        if (noOutput) {
          this.compiler += "*";
        }
      } else {
        if (noOutput) {
          this.compiler +=
            this.nodeList[i].handleBounds.source[0].id.split("__")[0];
        }
      }
    },
    hasMissingConnection() {
      return (
        this.connections.length / 3 === this.nodeList.length - 1 &&
        this.connections.length / 3 == 2 &&
        this.nodeList.length < 3
      );
    },
    checkExceptions() {
      const noOutput = this.compiler[this.compiler.length - 1] != "*";
      if (noOutput) {
        this.showException("É obrigatório usar uma output!");
      } else if (this.hasMissingConnection()) {
        this.showException("É obrigatório conectar todas as nodes no flow! 1");
      } else {
        this.showException("");
        this.$store.commit("clearException");
      }
    },
    showException(message) {
      this.$store.commit("increaseException");
      this.message = message;
    },
    changeStroke(color) {
      for (let i = 0; i < this.nodeList.length; i++) {
        if (this.form.cons[i].style.length) {
          this.form.cons[
            i
          ].style.cssText = `stroke: ${color}; stroke-width:6px;filter: drop-shadow(0 0 0.4em ${color});`;
        }
      }
    },
    validateCompilation() {
      for (let i = 0; i < this.nodeList.length; i++) {
        this.checkNodeType(i);
      }
      this.checkExceptions();
      if (this.exceptions == 0) {
        this.$store.commit("setReady", true);
        this.changeStroke("lime");
      } else {
        this.$store.commit("setReady", false);
        this.changeStroke("red");
      }
    },
    compile() {
      try {
        this.getData();
        this.$store.commit("updateLoader", true);
        this.compiler = "";
        this.$store.commit("clearException");
        this.$store.commit("setReady", true);
        this.validateCompilation();
      } catch (e) {
        if (this.message) {
          console.error(this.message);
        }
      } finally {
        setTimeout(this.$store.commit("updateLoader", false), 80000);
      }
    },
    removeOne() {
      this.$store.commit("removeOne");
    },
    clearAll() {
      this.$store.commit("clearNodeList");
      this.$store.commit("clearException");
      this.$store.commit("clearConnections");
    },
    back() {
      return this.$router.push("/");
    },
  },
});
</script>
<style lang="scss" scoped>
.dash-wrapper {
  height: 100%;
  position: relative;
  .ldr_wrapper {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    background: #100e1b;
    width: 100%;
    opacity: 0.7;
    height: 100%;
    z-index: 99999;
    .ldr_text {
      position: absolute;
      top: 47%;
      font-size: 20px;
      @media only screen and (max-width: 1869px) {
        left: 47%;
      }
      @media only screen and (min-width: 1870px) {
        left: 50%;
      }
    }
    .loader {
      position: absolute;
      top: 25%;
      @media only screen and (max-width: 1869px) {
        left: 48%;
      }
      @media only screen and (min-width: 1870px) {
        left: 50%;
      }
      border: 16px solid #f3f3f3;
      border-radius: 70%;
      filter: drop-shadow(0 0 0.4em rgb(0, 255, 242));
      border-top: 16px solid rgb(15, 2, 75);
      border-left: 16px solid rgb(223, 7, 7);
      border-right: 16px solid rgb(25, 223, 7);
      border-bottom: 16px solid rgb(5, 0, 70);
      width: 120px;
      height: 120px;
      -webkit-animation: 1.2s linear 0s infinite spin;
      animation: 1.2s linear 0s infinite spin;
    }
    .loader2 {
      @extend .loader;
      filter: drop-shadow(0 0 0.4em rgb(183, 0, 255));
      @media only screen and (max-width: 1869px) {
        left: 37%;
      }
      @media only screen and (min-width: 1870px) {
        left: 46%;
      }
      -webkit-animation: 1.2s linear 0s reverse infinite spin;
      animation: 1.2s linear 0s reverse infinite spin;
    }

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      from {
        filter: brightness(98%);
        transform: translateY(110vh);
        transform: rotate(0deg);
      }
      to {
        transform: translateY(0);
        transform: rotate(360deg);
      }
    }
  }
}
</style>

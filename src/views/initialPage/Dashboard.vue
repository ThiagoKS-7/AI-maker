<template>
  <div class="dash-wrapper">
    <div class="ldr_wrapper" v-show="loader">
      <div class="center">
        <div class="planet"></div>
      </div>
      <h4 class="ldr_text">Loading...</h4>
    </div>
    <ul class="tab_list">
      <li
        class="tab_item"
        v-for="(tab, index) in $store.getters.getTabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="[{ tab_selected: index == selectedIndex }]"
      >
        <i
          @click="$store.getters.getTabs.splice(selectedIndex, 1)"
          class="close_icon"
          >X</i
        >
        {{ tab.title }}
      </li>
    </ul>
    <ComponentDashboard
      :form="form"
      :sidebarNodes="sidebarNodes"
      @closeModal="form.nameModal = false"
      @compile="compile()"
      @removeOne="removeOne()"
      @clearAll="clearAll()"
    />
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
import { mapState } from "vuex";

export default defineComponent({
  name: "DashboardView",
  components: {
    ComponentDashboard,
  },
  data() {
    return {
      sidebarNodes: [],
      tabs: [
        {
          title: "demo.aim",
          value: [],
        },
      ],
      selectedIndex: 0,
      message: "",
      form: {
        cons: "",
        fileName: "",
        nameModal: true,
      },
    };
  },
  mounted() {
    this.selectTab(this.selectedIndex);
    this.getSidebarNodes();
    this.getData();
  },
  computed: mapState({
    loader: (state) => state.dashboard.loader,
    nodeList: (state) => state.dashboard.nodeList,
    exceptions: (state) => state.dashboard.exceptions,
    connections: (state) => state.dashboard.connections,
  }),
  watch: {
    nodeList() {
      this.$store.getters.getTabs[this.selectedIndex].value = this.nodeList;
    },
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.$store.getters.getTabs.forEach((tab, index) => {
        tab.isActive = index === i;
        this.$store.commit(
          "setNodeList",
          this.$store.getters.getTabs[this.selectedIndex].value
        );
      });
    },
    getSidebarNodes() {
      this.sidebarNodes = [
        {
          id: 0,
          nome: "Recon. Texto (OCR)",
          type: "ocr",
          img: OcrIcon,
          class: "vue-flow__node-default",
        },
        {
          id: 1,
          nome: "Nova Tabela (.csv/.xls)",
          type: "tD",
          img: TableIcon,
          class: "vue-flow__node-input",
        },
        {
          id: 2,
          nome: "Nova Imagem",
          type: "fD",
          img: FileIcon,
          class: "vue-flow__node-input",
        },
        {
          id: 3,
          nome: "SkLearn - Árv. Decisão",
          type: "dT",
          img: DecIcon,
          class: "vue-flow__node-default",
        },
        {
          id: 4,
          nome: "Detect. Objeto (YOLO)",
          type: "oD",
          img: OdIcon,
          class: "vue-flow__node-default",
        },
        {
          id: 5,
          nome: "Saída",
          type: "oN",
          img: OutIcon,
          class: "vue-flow__node-output",
        },
      ];
    },
    getData() {
      this.form.cons = document.getElementsByClassName("vue-flow__edge-path");
      this.$store.commit("setTabs", this.tabs);
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
        this.changeStroke("lime");
      } catch (e) {
        if (this.message) {
          console.error(this.message);
          alert(this.message);
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
      this.$store.commit("setFiles", []);
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
  @media only screen and (min-width: 10px) and (max-width: 1100px) {
    height: 90%;
    width: 100%;
  }

  .tab_list {
    list-style: none;
    margin: 0;
    display: flex;
    padding: 8px 0;
    background-color: rgba(12, 9, 24, 0.7);
    .tab_item {
      background: linear-gradient(to right, #00225e, #0b1931, rgb(47, 32, 61));
      color: rgb(168, 166, 166);
      margin: 0 3px;
      width: fit-content;
      font-size: 15px;
      font-weight: bold;
      border-radius: 6px 18px 0px 0px;
      padding: 14px 26px;
      cursor: default;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      .close_icon {
        position: absolute;
        font-size: 10px;
        top: 7px;
        right: 8px;
        color: #8d8a8a;
        &:hover {
          font-weight: bold;
          color: white;
        }
      }
    }

    .tab_selected {
      background: linear-gradient(to left, rgb(100, 45, 151), #0361e4, #616efe);
      margin: 0 3px;
      color: rgb(255, 255, 255);
      width: fit-content;
      font-size: 15px;
      font-weight: bold;
      border-radius: 6px 18px 0px 0px;
      padding: 14px 26px;
      cursor: default;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .ldr_wrapper {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    display: table;
    transition: opacity 0.3s ease;
    .ldr_text {
      position: absolute;
      top: 45.6vh;
      font-size: 2vw;
      left: 45.6vw;
    }
    .center {
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .planet {
      display: block;
      width: 12vw;
      height: 12vw;
      position: relative;
      transform-style: preserve-3d;
      border-radius: 50%;
      background: #fcc96b;
      background: rgb(252, 201, 107);
      background: linear-gradient(
        180deg,
        rgb(234, 16, 187) 0%,
        rgb(234, 16, 187) 15%,
        rgb(52, 241, 200) 15%,
        rgb(0, 249, 146) 19%,
        rgb(234, 16, 187) 19%,
        rgb(234, 16, 187) 22%,
        rgb(52, 241, 200) 22%,
        rgb(0, 249, 146) 28%,
        rgb(234, 16, 187) 28%,
        rgb(234, 16, 187) 31%,
        rgb(234, 16, 187) 33%,
        rgb(234, 16, 187) 36%,
        rgb(95, 5, 117) 36%,
        rgb(95, 5, 117) 48%,
        rgb(234, 16, 187) 48%,
        rgb(234, 16, 187) 55%,
        rgb(124, 6, 153) 55%,
        rgb(95, 5, 117) 66%,
        rgb(234, 16, 187) 66%,
        rgb(234, 16, 187) 70%,
        rgb(95, 5, 117) 70%,
        rgb(95, 5, 117) 73%,
        rgb(234, 16, 187) 73%,
        rgb(234, 16, 187) 82%,
        rgb(95, 5, 117) 82%,
        rgb(0, 249, 146) 86%,
        rgb(234, 16, 187) 86%
      );
      box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.25),
        inset 8px -4px 6px rgba(199, 128, 0, 0.5),
        inset -8px 4px 8px rgba(255, 235, 199, 0.5),
        inset 20px -5px 12px rgb(52, 2, 82), 0 0 100px rgba(255, 255, 255, 0.35);
      transform: rotateZ(-15deg);
    }

    .planet::before {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 16px solid #48286d;
      border-top-width: 0;
      border-radius: 50%;
      box-shadow: 0 -4px 0 #1d055e;
      animation: rings1 0.8s infinite linear;
    }

    .planet::after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 6px solid #6f24c5;
      border-image: linear-gradient(
        to left,
        rgb(100, 45, 151),
        #0361e4,
        #616efe
      );
      border-top-width: 0;
      border-radius: 50%;
      box-shadow: 0 -2px 0 rgb(95, 5, 117);
      animation: rings2 0.8s infinite linear;
    }

    @keyframes rings1 {
      0% {
        transform: rotateX(65deg) rotateZ(0deg) scale(1.75);
      }
      100% {
        transform: rotateX(65deg) rotateZ(360deg) scale(1.75);
      }
    }

    @keyframes rings2 {
      0% {
        transform: rotateX(65deg) rotateZ(0deg) scale(1.7);
      }
      100% {
        transform: rotateX(65deg) rotateZ(360deg) scale(1.7);
      }
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

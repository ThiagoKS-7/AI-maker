<template>
  <aside class="sidebar">
    <div class="description">Exemplos de Nodes</div>
    <div class="nodes">
      <div
        class="vue-flow__node-input"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        <div class="table_margin">
          <h5 class="title">Input Node</h5>
        </div>
      </div>
      <div
        class="vue-flow__node-input"
        :draggable="true"
        @dragstart="onDragStart($event, 'tI')"
      >
        <div class="table_margin">
          <h5 class="title">Table Data (.csv/.xls)</h5>
        </div>
      </div>
      <div
        class="vue-flow__node-default"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        <div class="table_margin">
          <h5 class="title">Default Node</h5>
        </div>
      </div>
      <div
        class="vue-flow__node-output"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        <div class="table_margin">
          <h5 class="title">OutPut Node</h5>
        </div>
      </div>
    </div>
    <div class="button-footer">
      <button @click="compile()">Run</button>
      <button @click="removeOne()">Delete 1</button>
      <button @click="clearAll()">Clear all</button>
    </div>
  </aside>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarTest",
  data() {
    return {
      nodeList: [],
      compiler: "",
    };
  },
  props: {
    node: {
      required: false,
    },
  },
  mounted() {
    this.nodeList = this.node;
  },
  methods: {
    onDragStart(event, nodeType) {
      if (event.dataTransfer) {
        event.dataTransfer.setData("application/vueflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      }
    },
    compile() {
      this.compiler = "";
      for (let i = 0; i < this.nodeList.length; i++) {
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
  },
});
</script>
<style lang="scss" scoped>
.sidebar {
  width: 30%;
}
.description {
  font-size: 25px;
}
.nodes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.button-footer {
  display: flex;
  justify-content: space-evenly;
}
</style>

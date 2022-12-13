<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import { useStore } from "@/store";
import { mapState } from "vuex";

export default defineComponent({
  name: "DefaultOutputNode",
  inheritAttrs: false,
  data() {
    return {
      store: "",
      imageData: "",
    };
  },
  created() {
    this.store = useStore();
  },
  computed: mapState({
    loader: (state) => state.dashboard.loader,
  }),
  methods: {
    changeStroke(color) {
      const cons = document.getElementsByClassName("vue-flow__edge-path");
      for (let i = 0; i < this.store.getters.getNodeList.length; i++) {
        cons[
          i
        ].style.cssText = `stroke: ${color}; stroke-width:6px;filter: drop-shadow(0 0 0.4em ${color});`;
      }
    },
    async run() {
      if (this.store.getters.isReady && this.store.getters.getFormData) {
        try {
          this.store.commit("updateLoader", true);
          axios.defaults.baseURL = `${process.env.VUE_APP_API_HOST}`;
          await axios
            .post(
              `${this.store.getters.getApiUrl}`,
              this.store.getters.getFormData,
              {
                "Response-Type": "blob",
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": `${process.env.VUE_APP_API_HOST}`,
                "Access-Control-Allow-Methods": "POST, GET, HEAD, OPTIONS",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Max-Age": "86400",
              }
            )
            .then((response) => {
              this.imageData = "data:image.png;base64," + response.data.data;
            })
            .catch((err) => {
              console.error(err);
            });
          this.changeStroke("green");
        } catch (e) {
          if (this.imageData.length > 1) {
            this.changeStroke("green");
          } else {
            this.changeStroke("red");
          }
        } finally {
          this.store.commit("updateLoader", false);
        }
      }
    },
  },
});
</script>
<template>
  <div class="table_node">
    <Handle id="oN__handle-top" type="target" :position="Position.Top" />
    <div class="table_margin">
      <img
        v-if="!imageData"
        class="node_icon"
        src="@/assets/dashboard/outNode.svg"
        @click="run()"
      />
      <img v-else class="preview" :src="imageData" @click="run()" />
      <h5 class="title">Saída</h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table_node {
  border-radius: 8px;
  width: 100px;
  font-size: 20px;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: var(--vf-node-text);
  text-align: center;
  border-width: 1px;
  border-style: solid;
  background: linear-gradient(to right, #0f1e8b, #201394, #7161fe, #195be8);
  border-color: #0041d0;
  .table_margin {
    width: 92%;
    height: 92%;
    border-radius: 8px;
    background-color: #081b44;
    padding: 2px;
    align-items: center;
    flex-direction: column;
    color: white;
    display: flex;
    justify-content: center;
    .title {
      font-size: 14px;
      margin: 0;
    }
  }
  .node_icon {
    width: 60px;
    height: 60px;
    cursor: grab;
    &:hover {
      cursor: pointer;
      width: 65px;
      height: 65px;
    }
  }
  .preview {
    width: 80px;
    height: 60px;
    cursor: grab;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em red);
  }
}
</style>

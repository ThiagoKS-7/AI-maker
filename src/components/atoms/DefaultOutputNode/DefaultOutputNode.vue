<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import { useStore } from "@/store";

export default defineComponent({
  name: "DefaultOutputNode",
  inheritAttrs: false,
  data() {
    return {
      store: "",
    };
  },
  created() {
    this.store = useStore();
  },
  methods: {
    async previewFile() {
      this.store.commit("setFiles", this.$refs.myFiles.files);
      if (this.store.getters.isReady) {
        axios
          .post(
            `${process.env.VUE_APP_API_HOST}${this.store.getters.getApiUrl}`,
            this.store.getters.getFormData,
            {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": `${process.env.VUE_APP_API_HOST}`,
            }
          )
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      }
    },
  },
});
</script>
<template>
  <div class="table_node">
    <Handle id="oN__handle-top" type="target" :position="Position.Top" />
    <div class="table_margin">
      <img class="node_icon" src="@/assets/dashboard/outNode.svg" />
      <h5 class="title">Output</h5>
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
    .img_preview {
      max-width: 65px;
      margin-bottom: 5px;
    }
  }
  .node_icon {
    width: 60px;
    height: 60px;
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em red);
  }
}
</style>

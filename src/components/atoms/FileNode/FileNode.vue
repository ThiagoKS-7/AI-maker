<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "FileNode",
  inheritAttrs: false,
  data() {
    return {
      imageData: "",
      store: "",
    };
  },
  created() {
    this.store = useStore();
  },
  methods: {
    async previewFile() {
      this.store.commit("setFiles", this.$refs.myFiles.files);
      if (this.store.getters.getFiles && this.store.getters.getFiles[0]) {
        const reader = new FileReader();
        this.store.commit("formAppend", this.store.getters.getFiles[0]);
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(this.store.getters.getFiles[0]);
      }
    },
  },
});
</script>
<template>
  <div class="table_node">
    <div class="table_margin">
      <img v-if="!imageData" class="upload_img" :src="require(`@/assets/dashboard/upcloud.`)" />
      <input
        v-if="!imageData"
        type="file"
        id="filepicker"
        ref="myFiles"
        accept="image/*"
        class="custom-file-input"
        @change="previewFile()"
      />
      <img class="img_preview" v-if="imageData" :src="imageData" />
      <h5 class="title" v-if="!store.getters.getFiles">File Data</h5>
      <h5 class="title" v-else>{{ this.store.getters.getFiles[0]?.name }}</h5>
    </div>
  </div>
  <Handle id="fD__handle-bottom" type="source" :position="Position.Bottom" />
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
    filter: drop-shadow(0 0 0.4em rgb(7, 224, 7));
  }
}
</style>

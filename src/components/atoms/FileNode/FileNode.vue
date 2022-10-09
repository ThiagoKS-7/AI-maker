<script setup>
import { Handle, Position, Connection, Edge } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "FileNode",
  inheritAttrs: false,
  data() {
    return {
      files: [],
      imageData: "",
    };
  },
  methods: {
    async previewFile() {
      this.files = this.$refs.myFiles.files;

      if (this.files && this.files[0]) {
        const reader = new FileReader();
        const formData = new FormData();
        formData.append("images", this.files[0]);
        console.log(...formData.values());
        reader.onload = (e) => {
          this.imageData = e.target.result;
          console.log(this.imageData);
        };
        reader.readAsDataURL(this.files[0]);
        axios
          .post("http://localhost:5000/image", formData, {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "http://localhost:5000",
          })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      }
    },
  },
});
</script>
<template>
  <div class="table_node">
    <div class="table_margin">
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
      <h5 class="title" v-if="!files">File Data</h5>
      <h5 class="title" v-else>{{ files[0]?.name }}</h5>
    </div>
  </div>
  <Handle id="tD__handle-bottom" type="source" :position="Position.Bottom" />
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

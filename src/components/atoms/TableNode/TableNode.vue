<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
import { useStore } from "@/store"

export default defineComponent({
  name: "TableNode",
  inheritAttrs: false,
  data() {
    return {
      tableData: "",
    };
  },
  created() {
    console.log(this.$store, useStore())
  }
  methods: {
    async previewFile() {
      this.$store.commit("setFiles", this.$refs.myFiles.files);
      if (this.$store.getters.getFiles && this.$store.getters.getFiles[0]) {
        const reader = new FileReader();
        this.$store.commit("formAppend", this.$store.getters.getFiles[0]);
        reader.onload = (e) => {
          this.tableData = e.target.result;
        };
        reader.readAsDataURL(this.$store.getters.getFiles[0]);
      }
    },
  },
});
</script>
<template>
  <div class="table_node">
    <div class="table_margin">
      <input
        v-if="!tableData"
        type="file"
        id="tabfilepicker"
        ref="myFiles"
        class="custom_file_input"
        @change="previewFile()"
      />
      <label v-if="!tableData" class="upload_label">Escolha o arquivo:</label>
      <img class="img_preview" v-if="tableData" :src="tableData" />
      <h5 class="title" v-if="!$store.getters.getFiles">
        Table Data - (.CSV, .XLS & .XLSX)
      </h5>
      <h5 class="title" v-else>{{ $store.getters.getFiles[0]?.name }}</h5>
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
    .upload_img {
      max-width: 60px;
    }
    .upload_label {
      font-size: 12px;
      margin-top: -5px;
      padding: 0 0 10px 0;
    }

    .custom_file_input {
      display: inline-block;
      max-width: 80px;
      padding: 70px 0 0 0;
      overflow: hidden;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: url("@/assets/dashboard/upcloud.svg") center center no-repeat;
      border-radius: 20px;
      background-size: 60px 60px;
    }
    .img_preview {
      max-width: 65px;
      margin-bottom: 5px;
    }
    &:hover {
      label {
        opacity: 0;
      }
      .custom_file_input {
        margin-top: 20px;
        background-size: 75px;
      }
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

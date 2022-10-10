<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";
// import axios from "axios";
import { useStore } from "@/store";

export default defineComponent({
  name: "ObjectDetectionNode",
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
        const formData = this.store.getters.getFormData;
        this.store.commit("formAppend", this.store.getters.getFiles[0]);
        console.log("FORMDATA: ", ...formData.values());
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(this.store.getters.getFiles[0]);
        // axios
        //   .post(`${process.env.VUE_APP_API_HOST}/image`, formData, {
        //     "Content-Type": "multipart/form-data",
        //     "Access-Control-Allow-Origin": `${process.env.VUE_APP_API_HOST}`,
        //   })
        //   .then((response) => console.log(response))
        //   .catch((err) => console.log(err));
      }
    },
  },
});
</script>
<template>
  <Handle id="oD__handle-top" type="source" :position="Position.Top" />
  <div class="table_node">
    <div class="table_margin">
      <img class="img_preview" src="@/assets/dashboard/ai-load.gif" />
      <h5 class="title">YOLOv3 Obj-Det</h5>
    </div>
  </div>
  <Handle id="oD__handle-bottom" type="source" :position="Position.Bottom" />
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
    width: 99px;
    height: 65px;
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em rgb(7, 224, 7));
  }
}
</style>

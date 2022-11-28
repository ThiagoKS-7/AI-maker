<script setup>
import { Handle, Position } from "@braks/vue-flow";
</script>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ObjectDetectionNode",
  inheritAttrs: false,
  data() {
    return {
      code: "</>",
    };
  },
  mounted() {
    this.$store.commit("setApiUrl", "/yolo");
  },
  methods: {
    openCode() {
      window.open(
        "https://vscode.dev/github/ThiagoKS-7/Python-YOLO_v3-2022",
        "_blank"
      );
    },
  },
});
</script>
<template>
  <div class="table_node">
    <Handle id="oD__handle-top" type="source" :position="Position.Top" />
    <div class="table_margin">
      <section class="img_preview">
        <i @click="openCode()" class="code_icon">{{ code }}</i>
        <div class="loader"></div>
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <g transform="translate(151.4918975830078, 6.876411437988281)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: #00d8fe"></stop>
                <stop offset="100%" style="stop-color: #7161fe"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="2500ms"
                repeatCount="indefinite"
                values="
                    M473,291.5Q450,333,437.5,379Q425,425,383,447Q341,469,295.5,480.5Q250,492,203,484.5Q156,477,119.5,447Q83,417,64.5,376Q46,335,46,292.5Q46,250,35.5,203.5Q25,157,51,117Q77,77,116,48.5Q155,20,202.5,19Q250,18,289,40.5Q328,63,372.5,73Q417,83,443.5,121Q470,159,483,204.5Q496,250,473,291.5Z;
                    M462.5,296Q472,342,439,374Q406,406,371.5,432.5Q337,459,293.5,469.5Q250,480,204.5,475Q159,470,119.5,445Q80,420,53,381.5Q26,343,15,296.5Q4,250,16.5,204Q29,158,58.5,123Q88,88,121,53.5Q154,19,202,31.5Q250,44,295,39Q340,34,367,70Q394,106,420.5,137.5Q447,169,450,209.5Q453,250,462.5,296Z;
                    M481.5,296Q473,342,443,377.5Q413,413,377.5,443Q342,473,296,469Q250,465,208,459Q166,453,132,427.5Q98,402,61,373Q24,344,16.5,297Q9,250,17,203.5Q25,157,61.5,127.5Q98,98,126.5,60Q155,22,202.5,15Q250,8,293.5,24Q337,40,377,61.5Q417,83,446.5,119.5Q476,156,483,203Q490,250,481.5,296Z;
                    M473,291.5Q450,333,437.5,379Q425,425,383,447Q341,469,295.5,480.5Q250,492,203,484.5Q156,477,119.5,447Q83,417,64.5,376Q46,335,46,292.5Q46,250,35.5,203.5Q25,157,51,117Q77,77,116,48.5Q155,20,202.5,19Q250,18,289,40.5Q328,63,372.5,73Q417,83,443.5,121Q470,159,483,204.5Q496,250,473,291.5Z;
                  "
              ></animate>
            </path>
          </g>
        </svg>
      </section>
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
      filter: drop-shadow(0 0 0.4em #fe00f2);
      position: relative;
      .code_icon {
        position: absolute;
        font-size: 12px;
        top: 0px;
        right: -10px;
        color: #e788fa;
        filter: drop-shadow(0 0 0.4em cyan);
        &:hover {
          font-weight: bold;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
  .node_icon {
    width: 99px;
    height: 65px;
    cursor: grab;
    &:hover {
      width: 99px;
      height: 65px;
      cursor: pointer;
    }
  }
  .loader {
    position: absolute;
    top: 20%;
    left: 33%;
    opacity: 0.7;
    border: 4px solid #eecda3;
    border-top: 4px solid #fe00f2;
    border-radius: 50%;
    filter: drop-shadow(0 0 0.4em cyan);
    width: 12px;
    height: 12px;
    animation: spin 4.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    59% {
      transform: rotate(270deg);
    }
    75% {
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(360deg);
    }
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em cyan);
  }
}
</style>

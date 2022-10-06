<script lang="ts" setup>
import { Handle, Position, Connection, Edge } from "@braks/vue-flow";

const onConnect = (params: Connection | Edge) =>
  console.log("handle onConnect", params);
const onClick = () => {
  console.log("onClick icon");
};
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div class="table_node">
    <div class="table_margin">
      <img
        class="node_icon"
        src="@/assets/dashboard/tableNode.svg"
        @click="onClick"
      />
      <h5 class="title">Table Data</h5>
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

<template>
  <aside class="sidebar">
    <div class="button-header">
      <Button @click="$emit('compile', $event)" class="success"> Run </Button>
      <Button @click="$emit('removeOne', $event)"> Delete 1 </Button>
      <Button @click="$emit('clearAll', $event)" class="danger">
        Clear all
      </Button>
    </div>
    <h3 class="description">Nodes Disponíveis</h3>
    <NodeList
      :sidebarNodes="sidebarNodes"
      @onNodeClick="$emit('onNodeClick', $event)"
    />
  </aside>
</template>
<script>
import { defineComponent } from "vue";
import NodeList from "@/components/organisms/NodeList/NodeList.vue";
import Button from "@/components/atoms/DefaultButton/DefaultButton.vue";

export default defineComponent({
  name: "ComponentSidebar",
  props: {
    sidebarNodes: {
      required: true,
    },
  },
  components: {
    NodeList,
    Button,
  },
});
</script>
<style lang="scss" scoped>
.description {
  font-size: 25px;
}
.nodes {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.button-header {
  display: flex;
  justify-content: space-evenly;
  margin: 0px 5px;
}
</style>

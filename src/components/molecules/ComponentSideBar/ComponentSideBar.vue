<template>
  <aside class="sidebar">
    <div class="description">Nodes Disponíveis</div>
    <div class="nodes">
      <div
        v-for="item in sidebarNodes"
        :key="item.id"
        :class="item.class"
        :draggable="true"
        @dragstart="onDragStart($event, item.type)"
      >
        <div class="table_margin">
          <img v-if="item.img" class="node_icon" :src="item.img" />
          <h5 class="title">{{ item.nome }}</h5>
        </div>
      </div>
    </div>
    <div class="button-footer">
      <button @click="$emit('compile', $event)">Run</button>
      <button @click="$emit('removeOne', $event)">Delete 1</button>
      <button @click="$emit('clearAll', $event)">Clear all</button>
    </div>
  </aside>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentSidebar",
  props: {
    sidebarNodes: {
      required: true,
    },
  },
  methods: {
    onDragStart(event, nodeType) {
      if (event.dataTransfer) {
        event.dataTransfer.setData("application/vueflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      }
    },
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
.button-footer {
  display: flex;
  justify-content: space-evenly;
}
</style>

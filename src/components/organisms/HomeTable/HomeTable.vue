<template>
  <div class="table-wrapper">
    <div class="mask"></div>
    <div class="content">
      <Title />
      <InitialMenu
        @click-new="$emit('click-new', $event)"
        @click-mng="$emit('click-mng', $event)"
        @click-cloud="$emit('click-cloud', $event)"
        @click-contrib="$emit('click-contrib', $event)"
        @click-data="$emit('click-data', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/atoms/Title/Title.vue";
import InitialMenu from "@/components/molecules/InitialMenu/InitialMenu.vue";

export default defineComponent({
  name: "HomeTable",
  components: {
    Title,
    InitialMenu,
  },
});
</script>

<style scoped>
.table-wrapper {
  opacity: 1;
  position: relative;
}
.content {
  z-index: 1;
  position: absolute;
  width: 100%;
}
.mask {
  background-color: #141a25;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 0;
  top: 0%;
}
</style>

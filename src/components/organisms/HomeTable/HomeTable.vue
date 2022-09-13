<template>
  <div class="table-wrapper">
    <Title />
    <InitialMenu />
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
}
</style>

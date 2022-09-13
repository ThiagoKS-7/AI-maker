<template>
  <div class="page-wrapper">
    <HomeTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTable from "@/components/organisms/HomeTable/HomeTable.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeTable,
  },
});
</script>
<style lang="scss" scoped>
.page-wrapper {
  background-color: #141a25;
  opacity: 0.8;
  height: 100%;
}
</style>

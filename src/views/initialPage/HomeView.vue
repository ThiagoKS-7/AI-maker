<template>
  <div class="page-wrapper">
    <HomeTable
      @click-new="goTo('/dashboard')"
      @click-mng="goTo('/mng-projects')"
      @click-cloud="goTo('/cloud-services')"
      @click-contrib="goTo('/contrib')"
      @click-data="goTo('/mng-data')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTable from "@/components/organisms/HomeTable/HomeTable.vue";
import { RouteLocationRaw } from "vue-router";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeTable,
  },
  methods: {
    goTo(value: RouteLocationRaw) {
      return this.$router.push(value);
    },
  },
});
</script>
<style lang="scss" scoped>
.page-wrapper {
  position: relative;
  height: 100%;
}
</style>

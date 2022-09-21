<template>
  <div class="dash-wrapper">
    <ComponentDashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentDashboard from "@/components/organisms/ComponentDashboard/ComponentDashboard.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    ComponentDashboard,
  },
  methods: {
    back() {
      return this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.dash-wrapper {
  height: 100%;
}
</style>

<template>
  <div class="dash-wrapper">
    <h1>Dashboard</h1>
    <button @click="back()">Voltar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardView",
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

<template>
  <div class="cloud-wrapper">
    <h1>Cloud</h1>
    <button @click="back()">Voltar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CloudServicesView",
  methods: {
    back() {
      return this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.cloud-wrapper {
  height: 100%;
}
</style>

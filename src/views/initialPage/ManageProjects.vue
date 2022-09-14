<template>
  <div class="projects-wrapper">
    <h1>Gerenciar</h1>
    <button @click="back()">Voltar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MngProjectsView",
  methods: {
    back() {
      return this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.projects-wrapper {
  height: 100%;
}
</style>

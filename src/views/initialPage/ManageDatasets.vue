<template>
  <div class="datasets-wrapper" v-show="$store.getters.getSignedIn == true">
    <h1>Datasets</h1>
    <button @click="back()">Voltar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MngDatasetsView",
  methods: {
    back() {
      return this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.datasets-wrapper {
  height: 100%;
}
</style>

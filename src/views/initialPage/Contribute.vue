<template>
  <div class="view-wrapper" v-show="$store.getters.getSignedIn == true">
    <h1>Contribuir</h1>
    <button @click="back()">Voltar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContrbuteView",
  methods: {
    back() {
      return this.$router.push("/");
    },
  },
});
</script>

<style lang="scss" scoped>
.view-wrapper {
  height: 100%;
}
</style>

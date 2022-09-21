<template>
  <div class="title_wrapper">
    <h1 class="title">Um infinito</h1>
    <h1 class="title">universo de possibilidades!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleDefault",
});
</script>

<style lang="scss" scoped>
.title_wrapper {
  color: white;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 50px;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
</style>

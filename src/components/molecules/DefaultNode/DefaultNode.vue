<template>
  <div class="table_margin">
    <img v-if="img" class="node_icon" :src="img" />
    <h5 class="name">{{ name }}</h5>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultNode",
  props: {
    name: {
      required: true,
    },
    img: {
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
.name {
  font-size: 11px;
  margin: 0.5em 0;
}
</style>

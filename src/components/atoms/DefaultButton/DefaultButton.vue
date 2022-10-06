<template>
  <button
    :class="[
      { danger: this.class == 'danger' },
      { success: this.class == 'success' },
      { default: !this.class },
    ]"
    @click="$emit('click', $event)"
  >
    <div>
      <slot />
    </div>
  </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultButton",
  props: {
    class: {
      type: String,
      required: false,
    },
  },
});
</script>
<style lang="scss" scoped>
.default {
  width: 400px;
  padding: 6px 8px;
  background: #030170;
  border-radius: 10px;
  margin: 0 10px;
  cursor: default;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    background: #0d0add;
  }
}
.danger {
  width: 400px;
  padding: 6px 8px;
  background: #831502;
  border-radius: 10px;
  margin: 0 10px;
  text-transform: capitalize;
  cursor: default;
  &:hover {
    cursor: pointer;
    background: #eb2704;
  }
}
.success {
  width: 400px;
  padding: 6px 8px;
  background: #02692a;
  border-radius: 10px;
  margin: 0 10px;
  text-transform: capitalize;
  cursor: default;
  &:hover {
    cursor: pointer;
    background: #039946;
  }
}
</style>

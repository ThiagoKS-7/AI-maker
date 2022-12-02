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
.basic_button {
  width: 350px;
  height: 45px;
  margin: 0 5px;
  cursor: default;
  text-transform: capitalize;
  border-radius: 10px;
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    width: 420px;
    height: 69px;
    margin: 0 10px;
    padding: 6px 8px;
    &:hover {
      cursor: pointer;
    }
  }
}
.default {
  @extend .basic_button;
  background: #030170;
  &:hover {
    background: #0d0add;
  }
}
.danger {
  @extend .basic_button;
  background: #831502;
  &:hover {
    background: #eb2704;
  }
}
.success {
  @extend .basic_button;
  background: #02692a;
  &:hover {
    background: #039946;
  }
}
</style>

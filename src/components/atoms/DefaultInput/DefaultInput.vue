<template>
  <div :vshow="type == 'text' || type == 'number'" class="input-container">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      class="input-default"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="changeText($event)"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleDefault",
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeText(event: any) {
      this.$emit("input", event.target.value);
    },
  },
});
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0 2em;
  .input-label {
    width: fit-content;
    margin-left: 6px;
    margin-bottom: 5px;
  }
  .input-default {
    width: fit-content;
    width: fit-content;
    font-size: 20px;
    background: #081326;
    color: white;
    border: 2px solid rgb(24, 93, 172);
    min-height: 45px;
    min-width: 400px;
    border-radius: 4px;
    &:focus {
      border-color: red;
    }
  }
}
</style>

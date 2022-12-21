<template>
  <div class="input-container" :class="{ flex: inline }">
    <label class="input-label" v-if="label">
      {{ label }}
    </label>
    <input
      :value="value"
      :type="type"
      :tabindex="tabindex"
      :style="{ width: width }"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      :class="newStyle"
      @input="changeText($event)"
      @click="$emit('click', $event)"
      @keypress="onlyNumber($event)"
      @blur="$emit('blur', $event)"
      @keyup="$emit('keyup', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultInput",
  props: {
    value: {
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noSubmitWithEnter: {
      type: Boolean,
    },
    maxlength: {
      type: Number,
    },
    tabindex: {
      type: Number,
      required: false,
    },
    errorMessage: {
      type: String,
      default: "Campo obrigatório",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: "submit",
    },
    contentFormat: {
      type: String,
      default: "",
    },
    inline: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "100%",
    },
    newStyle: {
      type: String,
      default: "default",
    },
  },
  methods: {
    changeText(event: any) {
      this.$emit("input", event);
    },
    onlyNumber(value: any) {
      let keyCode = value.keyCode ? value.keyCode : value.which;
      if (this.noSubmitWithEnter && value.key == "Enter") {
        value.preventDefault();
      }
      if (this.contentFormat === "number") {
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
          value.preventDefault();
        }
      } else if (this.contentFormat === "integer") {
        if (keyCode < 48 || keyCode > 57) {
          value.preventDefault();
        }
      }
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
  .default {
    width: 52vw !important;
    max-width: 427px;
    font-size: clamp(14px, 3.7vw, 20px);
    padding: 0 13px;
    background: #081326;
    color: white;
    border: 2px solid rgb(24, 93, 172);
    min-height: 25px;
    border-radius: 4px;
  }
  .large {
    font-size: clamp(14px, 3.7vw, 20px);
    width: 52vw !important;
    max-width: 427px;
    padding: 0 0 0 5px;
    background: #081326;
    color: white;
    border: 2px solid rgb(24, 93, 172);
    min-height: 45px;
    border-radius: 4px;
  }
}
</style>

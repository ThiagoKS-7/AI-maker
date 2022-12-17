<template>
  <div>
    <button
      :type="type"
      :[newStyle]="true"
      :disabled="disabled"
      :class="[
        { btn: !customHover },
        { btn_hover: customHover },
        { disabled: disabled },
        { alignInput: alignInput },
        { 'no-margin': noMargin },
      ]"
      @click.prevent="$emit('click', $event)"
    >
      <img
        v-if="img"
        :style="{ marginRight: !!title ? '5px' : '0px' }"
        :src="require(`@/assets/${img}`)"
      />
      <i v-if="icon" :class="icon"></i>
      <span class="title" v-if="title">{{ title }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultButton",
  props: {
    type: {
      type: String,
      default: "submit",
    },
    title: {
      type: String,
      default: "",
    },
    newStyle: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
    },
    icon: {
      type: String,
    },
    customHover: {
      type: Boolean,
      default: false,
    },
    alignInput: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@mixin button-style {
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0px 3px 0px 0px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 4px;
  outline: none;
  border: none;
  transition: 0.2s ease-in-out;
  opacity: 0.9;
  width: 100%;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  @media only screen and (min-width: 1100px) and (max-width: 1860px) {
    min-width: 70px;
  }

  @media only screen and (min-width: 1870px) {
    min-width: 4.2vw;
  }
  &.alignInput {
    padding: 6px !important;
  }

  img {
    width: 16px;
    height: 16px;
  }

  i {
    width: 16px;
    height: 16px;
  }

  i.gold {
    color: #805d07ff;
  }

  i.green {
    color: #ffffff;
  }

  i.white {
    color: #303030;
  }

  i.border-black {
    color: #303030;
  }

  i.border-red {
    color: #aa4341;
  }

  i.red {
    color: #ffffff;
  }

  i.border-green {
    color: #2a5f56;
  }

  i.border-white {
    color: #ffffff;
  }
}

.btn[default] {
  @include button-style;
  background: #5812b4;
  color: #ffffff;
  &:hover {
    background: linear-gradient(to left, #942fd8, #3e0b80);
  }
}

.btn[hover-green] {
  @include button-style;
  background: #08941f;
  font-weight: bold;
  color: #fff;
  &:hover {
    background-image: linear-gradient(to right, #025020, #0da139);
  }
}

.btn[hover-blue] {
  @include button-style;
  background: #2308bb;
  font-weight: bold;
  color: #fff;
  &:hover {
    background-image: linear-gradient(to right, #1b078a, #2240c7);
  }
}

.btn[hover-red] {
  @include button-style;
  background: #bb085c;
  font-weight: bold;
  color: #fff;
  &:hover {
    background-image: linear-gradient(to right, #740505, #b80774);
  }
}

.disabled {
  background-color: #caa1ff !important;
  color: #9e9c9c;
  &:hover {
    background: #caa1ff !important;
  }
}

.no-margin {
  margin: 0 !important;
}
.title {
  font-size: 11px;
  width: fit-content;
  padding: 0 6px 0 6px;
  text-transform: uppercase;
  @media only screen and (min-width: 1870px) {
    font-size: 13px;
  }
}
</style>

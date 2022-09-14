<template>
  <div class="icon_wrapper" @click="$emit('click', $event)">
    <img
      :class="[{ png_icon: png }, { svg_icon: !png }]"
      :src="require(`@/assets/${icon}`)"
    />
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InitialIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    png: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.icon_wrapper {
  display: flex;
  flex-direction: column;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: default;
  height: fit-content;
  .svg_icon {
    width: 210px;
    height: 210px;
    transition: all 0.2s ease-in-out;
    @media only screen and (min-width: 1870px) {
      width: 220px;
      height: 220px;
    }
  }
  .png_icon {
    width: 200px;
    height: 190px;
    transition: all 0.2s ease-in-out;
    @media only screen and (min-width: 1870px) {
      width: 230px;
      height: 220px;
    }
  }
  .title {
    color: white;
  }
  &:hover {
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    padding: 0 0.7em;
    cursor: pointer;
    > .png_icon {
      width: 250px;
      height: 200px;
      @media only screen and (min-width: 1870px) {
        width: 250px;
        height: 230px;
      }
    }
    > .svg_icon {
      width: 260px;
      height: 230px;
      @media only screen and (min-width: 1870px) {
        width: 270px;
        height: 240px;
      }
    }
    > h3 {
      padding: 0.7em;
      font-size: 22px;
      border-radius: 10px;
      color: white;
      background-position: 100% 0;
      -o-transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      background-image: linear-gradient(
        to right,
        #0b1c9a,
        #0361e4,
        #616efe,
        #19b1e8
      );
      box-shadow: 0 4px 15px 0 rgba(10, 214, 229, 0.75);
      &:focused {
        background-position: 100% 0;
        -o-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        background-image: linear-gradient(
          to right,
          #12153e,
          #5767e3,
          #b6ecd2,
          #2bb673
        );
        box-shadow: 0 4px 15px 0 rgba(49, 105, 196, 0.75);
        box-shadow: 0 4px 15px 0 rgba(10, 214, 229, 0.75);
      }
    }
  }
}
</style>

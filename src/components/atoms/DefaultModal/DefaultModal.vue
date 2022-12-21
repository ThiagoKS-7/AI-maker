<template>
  <div class="modal__outer">
    <div @click.self="$emit('closeModal')" v-if="modal" class="modal-mask">
      <div class="modal-wrapper">
        <div
          v-if="!headerless"
          :class="{
            modal_container: !size,
            modal_container_xsmall: size === 'xsmall',
            modal_container_small: size === 'small',
            modal_container_large: size === 'large',
          }"
        >
          <div class="header">
            <h3 style="margin: 0" v-if="title">{{ title }}</h3>
            <div class="first-row">
              <i @click.self="$emit('closeModal', false)" class="modal-close">
                X
              </i>
            </div>
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
        <div
          v-if="headerless"
          :class="{
            headless_container: !size,
            headless_container_xsmall: size === 'xsmall',
            headless_container_small: size === 'small',
            headless_container_large: size === 'large',
          }"
        >
          <div class="first-row">
            <i @click.self="$emit('closeModal', false)" class="modal-close">
              X
            </i>
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultModal",
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
    },
    headerless: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    icon: {
      type: String,
    },
    newStyle: {
      type: String,
      default: "default",
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal_container {
    margin: 0px auto;
    max-width: 500px;
    width: 71vw;
    border-radius: 2vh;
    height: 35%;
    min-height: 260px;
    background: linear-gradient(to right, #0a2044, #0b1931, rgb(47, 32, 61));
    box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    transition: all 0.3s ease;
    max-height: calc(100vh - 10px);
    overflow-y: auto;
    overflow-x: auto;
  }
}
.header {
  display: flex;
  justify-content: space-between;

  padding: 13px 17px;
  background: linear-gradient(to right, #0361f8, rgb(13, 33, 102), #190564);
}
.headless_container {
  margin: 0px auto;
  min-width: 275px;
  max-width: 500px;
  width: 48%;
  border-radius: 2vh;
  height: 35%;
  min-height: 260px;
  padding: 12px;
  background: linear-gradient(to right, #0a2044, #0b1931, rgb(47, 32, 61));
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-close {
  width: 15px;
  height: 15px;
  color: #8d8a8a;
  &:hover {
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
}
.small_middle_icon {
  display: flex;
  margin-top: -28px;
  margin-bottom: -16px;
  justify-content: center;
}
.middle_icon {
  display: flex;
  justify-content: center;
}
.headless-modal-content {
  display: flex;
  justify-content: center;
}
.first-row {
  display: flex;
  justify-content: flex-end;
}
.modal_container_large {
  width: 1280px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  max-height: calc(100vh - 10px);
  overflow-y: auto;
  overflow-x: auto;
}
.headless_container_large {
  width: 1280px;
  margin: 0px auto;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal_container_small {
  width: 530px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.headless_container_xsmall {
  width: 360px;
  margin: 0px auto;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal_container_zsmall {
  width: 360px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.headless_container_small {
  width: 530px;
  margin: 0px auto;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.right_aligned_small {
  margin: 0 0 4.5% 59.7%;
}
.right_aligned {
  margin: 0 0 11.5% 48.7%;
}
.right_aligned_large {
  margin: 2% 0 0 5%;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 0 8px 8px 0;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(170, 170, 170);
  border-radius: 0 8px 8px 0;
}
</style>

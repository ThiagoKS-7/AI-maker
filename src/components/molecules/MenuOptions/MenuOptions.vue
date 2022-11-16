<template>
  <div class="menu_options">
    <ul class="menu_list">
      <li @click="toggleFile()" @mouseover="toggleFile()">Arquivo</li>
      <div v-if="clickedFile" class="dropdown">
        <ul style="list-style: none">
          <li>Novo</li>
          <li>Abrir</li>
          <li>Salvar Como</li>
          <li>Config.</li>
        </ul>
      </div>
      <li @click="toggleEdit()" @mouseover="toggleEdit()">Editar</li>
      <div v-if="clickedEdit" class="dropdownEdit"></div>
      <li>Ferramentas</li>
      <li>Ajuda</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuOptions",
  data() {
    return {
      clickedFile: false,
      clickedEdit: false,
    };
  },
  methods: {
    toggleFile() {
      this.clickedFile = !this.clickedFile;
      if (this.clickedFile) {
        this.clickedEdit = false;
      }
    },
    toggleEdit() {
      this.clickedEdit = !this.clickedEdit;
      if (this.clickedEdit) {
        this.clickedFile = false;
      }
    },
  },
});
</script>
<style lang="scss">
.menu_options {
  .menu_list {
    justify-content: space-evenly;
    display: flex;
    list-style-type: none;
    li {
      font-size: 18px;
      padding: 6px 8px;
      color: #a9aaac;
      background-size: 300% 100%;
      border-radius: 6px;
      -o-transition: all 0.6s ease-in-out;
      -webkit-transition: all 0.6s ease-in-out;
      transition: all 0.6s ease-in-out;
      height: fit-content;
      &:hover {
        cursor: pointer;
        color: white;
        background-position: 100% 0;
        -o-transition: all 0.6s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        background-image: linear-gradient(
          to right,
          #0b1c9a,
          #0361e4,
          #616efe,
          #19b1e8
        );
        box-shadow: 0 4px 15px 0 rgba(10, 214, 229, 0.75);
      }
      &:focused {
        background-position: 100% 0;
        -o-transition: all 0.6s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
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
    .dropdown {
      width: 300px;
      height: fit-content;
      width: 117px;
      position: absolute;
      z-index: 9999;
      top: 92px;
      right: 297px;
      padding: 15px 0px;
      background-size: 300% 100%;
      border-radius: 6px;
      -o-transition: all 0.6s ease-in-out;
      -webkit-transition: all 0.6s ease-in-out;
      transition: all 0.6s ease-in-out;
      height: 300px;
      background-image: linear-gradient(
        to left,
        #0b1c9a,
        #3403e4,
        #151c68,
        #0d409e
      );
      height: -moz-fit-content;
      height: fit-content;
    }
    .dropdownEdit {
      @extend .dropdown;
      position: absolute;
      right: 223px;
    }
  }
}
</style>

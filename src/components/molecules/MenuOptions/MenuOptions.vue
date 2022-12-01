<template>
  <div v-if="$route.fullPath == '/dashboard'" class="menu_options">
    <ul class="menu_list">
      <div class="drop-file-wrap">
        <li @click="toggleFile()" @mouseover="toggleFile()">Arquivo</li>
        <div v-if="clickedFile" class="dropdown">
          <ul class="dropdown_list">
            <li>Novo</li>
            <li>Abrir</li>
            <li @click="saveFile()">Salvar Como</li>
            <li>Config.</li>
          </ul>
        </div>
      </div>
      <div class="drop-file-wrap">
        <li @click="toggleEdit()" @mouseover="toggleEdit()">Editar</li>
        <div v-if="clickedEdit" class="dropdownEdit">
          <ul class="dropdown_list">
            <li>Desfazer</li>
            <li>Refazer</li>
            <li>Aparência</li>
          </ul>
        </div>
      </div>
      <li>Ferramentas</li>
      <li>Ajuda</li>
    </ul>
  </div>
</template>
<script lang="ts">
import FileSaver from "file-saver";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "MenuOptions",
  data() {
    return {
      clickedFile: false,
      clickedEdit: false,
      clickedTools: false,
      clickedHelp: false,
    };
  },
  computed: mapState({
    nodeList: (state: any) => state.dashboard.nodeList,
  }),
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
    toggleTools() {
      this.clickedEdit = !this.clickedEdit;
      if (this.clickedEdit) {
        this.clickedFile = false;
      }
    },
    toggleHelp() {
      this.clickedEdit = !this.clickedEdit;
      if (this.clickedEdit) {
        this.clickedFile = false;
      }
    },
    saveFile() {
      const temp: any = [];
      this.nodeList.forEach((el: any) => {
        temp.push(el);
      });
      var blob = new Blob([JSON.stringify(temp)], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob, "myflow.aim");
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
    .drop-file-wrap {
      position: relative;
      width: fit-content;
      .dropdown {
        width: 117px;
        position: absolute;
        z-index: 9999;
        top: 30px;
        left: -44px;
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
        @media only screen and (min-width: 10px) and (max-width: 1100px) {
          right: 145px;
        }
      }
      .dropdownEdit {
        @extend .dropdown;
        position: absolute;
        left: -54px;
      }
    }
    .dropdown_list {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
}
</style>

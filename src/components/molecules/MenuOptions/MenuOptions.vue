<template>
  <div v-if="$route.fullPath == '/dashboard'" class="menu_options">
    <ul class="menu_list">
      <div class="drop-file-wrap">
        <li @click="toggleFile()" @mouseover="toggleFile()">Arquivo</li>
        <div v-if="clickedFile" class="dropdown">
          <ul class="dropdown_list">
            <li @click="newFile()">Novo</li>
            <li class="opener">
              <input
                type="file"
                id="file_open"
                ref="myFiles"
                class="file_open"
              />
              <label for="file_open" class="label_open"> Abrir </label>
            </li>
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
      <div class="drop-file-wrap">
        <li @click="toggleHelp()" @mouseover="toggleHelp()">Ajuda</li>
        <div v-if="clickedHelp" class="dropdownHelp">
          <ul class="dropdown_list">
            <li>Tutoriais em Vídeo</li>
            <li>Documentação</li>
            <li>Relatar um problema</li>
            <li>Exibir Licença</li>
            <li>Sobre</li>
          </ul>
        </div>
      </div>
    </ul>
  </div>
</template>
<script lang="ts">
import FileSaver from "file-saver";
import { defineComponent } from "vue";
import { mapState } from "vuex";
let id = 0;
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
    getId() {
      return id++;
    },
    toggleFile() {
      this.clickedFile = !this.clickedFile;
      if (this.clickedFile) {
        this.clickedEdit = false;
        this.clickedHelp = false;
      }
    },
    toggleEdit() {
      this.clickedEdit = !this.clickedEdit;
      if (this.clickedEdit) {
        this.clickedFile = false;
        this.clickedHelp = false;
      }
    },
    toggleTools() {
      this.clickedEdit = !this.clickedEdit;
      if (this.clickedEdit) {
        this.clickedFile = false;
      }
    },
    toggleHelp() {
      this.clickedHelp = !this.clickedHelp;
      if (this.clickedHelp) {
        this.clickedFile = false;
        this.clickedEdit = false;
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
    newFile() {
      this.$store.commit("setNameModal", true);
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
      .dropdownHelp {
        @extend .dropdown;
        position: absolute;
        width: 150px;
        left: -85px;
      }
    }
    .dropdown_list {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
      .opener {
        position: relative;
        cursor: pointer;
        .file_open {
          opacity: 0;
          position: absolute;
          left: -114px;
          width: 230px;
          cursor: pointer;
          display: inline-block;
          overflow: hidden;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          background: transparent;
          background-size: 60px 60px;
        }
      }
    }
  }
}
</style>

<template>
  <nav>
    <div class="title_container" @click="$router.push('/')">
      <img
        class="icon"
        src="https://user-images.githubusercontent.com/83460816/184789013-8b7475ac-3db4-4232-ac74-0f7f0ba9e230.png"
      />
      <h1 class="title">AI MAKER</h1>
    </div>
    <!-- <router-link to="/">Home</router-link> -->
    <div class="menu">
      <div class="icons">
        <img
          class="menu_icon"
          src="./assets/initialPage/home.svg"
          @click="$router.push('/')"
        />
        <img
          class="menu_icon"
          src="./assets/initialPage/exit.svg"
          @click="$router.push('/login')"
        />
      </div>
      <div class="menu_options">
        <ul class="menu_list">
          <li>Arquivo</li>
          <li>Editar</li>
          <li>Ferramentas</li>
          <li>Ajuda</li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  @media only screen and (max-width: 1869px) {
    height: 88vh;
  }
  @media only screen and (min-width: 1870px) {
    height: 89vh;
  }
  background-color: transparent;
}
div {
  color: white;
}
html,
body {
  padding: 0;
  margin: 0;
  background: url("./assets/initialPage/bkg.svg");
  background-size: 125%;
}

nav {
  background-color: #0a101a;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  nav a {
    font-weight: bold;
    color: #2c3e50;
    nav a.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import "https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.40/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.40/dist/theme-default.css";

:root {
  --primary: #bb86fc;
  --secondary: #03dac5;
  --vp-c-brand: #10b981;
  --vp-c-accent: #bb86fc;
  --vp-c-bg-alt: rgb(249, 249, 249, 75%);
}
.vue-flow {
  position: relative;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  overflow: hidden;
}
.vue-flow__node-default {
  border-color: cyan;
  &:hover {
    filter: drop-shadow(0 0 0.4em cyan);
  }
}
.vue-flow__node-input {
  border-color: rgb(7, 224, 7);
  &:hover {
    filter: drop-shadow(0 0 0.4em rgb(7, 224, 7));
  }
}
.vue-flow__node-output {
  border-color: red;
  &:hover {
    filter: drop-shadow(0 0 0.4em red);
  }
}

.vue-flow__node-default,
.vue-flow__node-input,
.vue-flow__node-input.selected,
.vue-flow__node-output {
  border-radius: 8px;
  width: 100px;
  font-size: 20px;
  margin: 0;
  padding: 3px;
  height: 100px;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: var(--vf-node-text);
  text-align: center;
  border-width: 1px;
  border-style: solid;
  background: linear-gradient(to right, #0f1e8b, #201394, #7161fe, #195be8);
  border-color: #0041d0;
  .table_margin {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #081b44;
    padding: 2px;
    align-items: center;
    flex-direction: column;
    color: white;
    display: flex;
    justify-content: center;
    .title {
      font-size: 11px;
      margin: 0;
    }
  }
  .node_icon {
    width: 99px;
    height: 65px;
  }
}
.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.dndflow {
  flex-direction: column;
  display: flex;
  height: -webkit-fill-available;
}
.dndflow aside {
  color: #fff;
  font-weight: 700;
  max-width: 250px;
  padding: 15px 10px;
  font-size: 12px;
  background: #355c7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0a101a,
    #0f203d,
    rgb(65, 40, 87)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0a101a,
    #0b1931,
    rgb(47, 32, 61)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  @media screen and (min-width: 2px) and (max-width: 639px) {
    max-width: 95%;
  }
}
.dndflow aside .nodes > * {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 2px #00000040;
}
.dndflow aside .description {
  margin: 10px 0px;
}
.dndflow .vue-flow-wrapper {
  flex-grow: 1;
  height: 100%;
}
@media screen and (min-width: 640px) {
  .dndflow {
    flex-direction: row;
  }
  .dndflow aside {
    min-width: 15%;
  }
}
@media screen and (max-width: 639px) {
  .dndflow aside .nodes {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
}
.title_container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: fit-content;
  margin-left: 2em;
  margin-top: 1px;
  cursor: default;
  color: white;
  .icon {
    border-radius: 100px;
    width: 60px;
    height: 60px;
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em rgb(38, 212, 255));
    cursor: pointer;
  }
}

.menu {
  color: white;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  .icons {
    display: flex;
    justify-content: space-between;
    width: 80px;
    .menu_icon {
      width: 30px;
      height: 30px;
      opacity: 1;
      cursor: default;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
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
    }
  }
}
</style>

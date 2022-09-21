<template>
  <nav>
    <div class="title_container">
      <img
        class="icon"
        src="https://user-images.githubusercontent.com/83460816/184789013-8b7475ac-3db4-4232-ac74-0f7f0ba9e230.png"
      />
      <h1 class="title">AI MAKER</h1>
    </div>
    <!-- <router-link to="/">Home</router-link> -->
    <div class="menu">
      <div class="icons">
        <img class="menu_icon" src="./assets/initialPage/home.svg" />
        <img class="menu_icon" src="./assets/initialPage/exit.svg" />
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
  color: #2c3e50;
  height: 100vh;
  background-color: transparent;
}

html,
body {
  padding: 0;
  margin: 0;
  background: url("./assets/initialPage/bkg.svg");
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

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.dndflow {
  flex-direction: column;
  display: flex;
  height: 100%;
}
.dndflow aside {
  color: #fff;
  font-weight: 700;
  border-right: 1px solid #eee;
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
}
.dndflow aside .nodes > * {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 2px #00000040;
}
.dndflow aside .description {
  margin-bottom: 10px;
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
    min-width: 25%;
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
  color: white;
  .icon {
    border-radius: 100px;
    width: 60px;
    height: 60px;
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

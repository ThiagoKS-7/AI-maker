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

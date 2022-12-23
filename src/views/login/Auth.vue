<template>
  <div class="view-wrapper">
    <img
      class="icon"
      src="https://user-images.githubusercontent.com/83460816/184789013-8b7475ac-3db4-4232-ac74-0f7f0ba9e230.png"
    />
    <h1 class="title">Bem vindo</h1>
    <h1 class="title">ao</h1>
    <h1 class="title">AI Maker</h1>
    <button @click="googleLogin()" class="google_button">
      <img
        class="button_icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
      />
      <span>Sign in with Google</span>
    </button>
    <button @click="twitterLogin()" class="twitter_button">
      <i class="devicon-twitter-original button_icon"></i>
      <span>Sign in with Twitter</span>
    </button>
    <button @click="githubLogin()" class="github_button">
      <i class="devicon-github-original button_icon"></i>
      <span>Sign in with Github</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebaseConfig from "@/firebase";
import {
  handleSignInGoogle,
  handleSignInGitHub,
  handleSignInTwitter,
} from "@/middleware/auth";
firebaseConfig;
export default defineComponent({
  name: "LoginView",
  methods: {
    back() {
      return this.$router.push("/");
    },
    googleLogin() {
      return handleSignInGoogle();
    },
    twitterLogin() {
      return handleSignInTwitter();
    },
    githubLogin() {
      return handleSignInGitHub();
    },
  },
});
</script>

<style lang="scss" scoped>
.view-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin: 0;
    padding: 0;
    height: fit-content;
  }
  .icon {
    border-radius: 8vw;
    width: 13vw;
    height: 13vw;
    margin: 1.5em 0;
    @media only screen and (min-width: 0px) and (max-width: 1366px) {
      min-width: 120px;
      min-height: 120px;
      border-radius: 5em;
    }
  }
  .default_button {
    display: flex;
    align-items: center;
    border-radius: 0.9vw;
    justify-content: space-around;
    padding: 8px;
    font-weight: bold;
    width: 18vw;
    height: 3vw;
    font-size: 1.2vw;
    margin: 0.5em 0;
    opacity: 0.8;
    min-width: 200px;
    min-height: 30px;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
    @media only screen and (min-width: 0px) and (max-width: 1366px) {
      span {
        font-size: 15px;
      }
    }
  }
  .google_button {
    @extend .default_button;
    background-color: white;
    @media only screen and (min-width: 0px) and (max-width: 400px) {
      margin: 2.5em 0;
      border-radius: 10px;
      padding: 25px 0;
    }
    .button_icon {
      min-width: 15px;
      min-height: 15px;
      width: 1.3vw;
      padding: 0 7px 0 0;
      height: 1.3vw;
    }
  }
  .twitter_button {
    @extend .default_button;
    color: white;
    background: linear-gradient(to right, rgb(29, 155, 240), rgb(97, 178, 233));
    @media only screen and (min-width: 0px) and (max-width: 400px) {
      margin: 2.5em 0;
      border-radius: 10px;
      padding: 25px 0;
    }
    .button_icon {
      min-width: 15px;
      font-size: 1.1vw;
      min-height: 15px;
      width: 1.3vw;
      padding: 0 7px 0 0;
      height: 1.3vw;
      @media only screen and (min-width: 0px) and (max-width: 1366px) {
        font-size: 15px;
      }
    }
  }
  .github_button {
    @extend .default_button;
    color: white;
    background: linear-gradient(to right, #0d1117, #191e27);
    @media only screen and (min-width: 0px) and (max-width: 400px) {
      margin: 2.5em 0;
      border-radius: 10px;
      padding: 25px 0;
    }
    .button_icon {
      min-width: 15px;
      min-height: 15px;
      font-size: 1.3vw;
      width: 1.3vw;
      padding: 0 7px 0 0;
      height: 1.3vw;
      @media only screen and (min-width: 0px) and (max-width: 1366px) {
        font-size: 15px;
      }
    }
  }
}
</style>

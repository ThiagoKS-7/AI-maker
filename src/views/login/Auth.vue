<template>
  <div class="view-wrapper">
    <h1>Login</h1>
    <button @click="back()">Voltar</button>
    <button @click="googleLogin()">Google Sign in</button>
    <button @click="twitterLogin()">Twitter Sign in</button>
    <button @click="githubLogin()">github Sign in</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  handleSignInGoogle,
  handleSignInGitHub,
  handleSignInTwitter,
} from "@/middleware/auth";
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
}
</style>

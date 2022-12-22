<template>
    <div class="view-wrapper">
      <h1>Login</h1>
      <button @click="back()">Voltar</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "LoginView",
    methods: {
      back() {
        return this.$router.push("/");
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .view-wrapper {
    height: 100%;
  }
  </style>
  
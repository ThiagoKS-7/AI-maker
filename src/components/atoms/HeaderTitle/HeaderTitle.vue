<template>
  <div class="title_container" @click="$router.push('/')">
    <img
      class="icon"
      src="https://user-images.githubusercontent.com/83460816/184789013-8b7475ac-3db4-4232-ac74-0f7f0ba9e230.png"
    />
    <h1 class="title">AI MAKER</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderTitle",
});
</script>
<style lang="scss">
.title_container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: fit-content;
  margin-left: 2em;
  margin-top: 1px;
  cursor: default;
  color: white;
  .title {
    @media only screen and (min-width: 0px) and (max-width: 1100px) {
      display: none;
    }
  }
  .icon {
    border-radius: 100px;
    width: 60px;
    height: 60px;
    @media only screen and (min-width: 0px) and (max-width: 1100px) {
      width: 40px;
      height: 40px;
    }
  }
  &:hover {
    filter: drop-shadow(0 0 0.4em rgb(38, 212, 255));
    cursor: pointer;
  }
}
</style>

<template>
  <div class="menu_wrapper">
    <img class="png_icon" src="@/assets/initialPage/newAi.png" />
    <img class="menu_icon" src="@/assets/initialPage/mngProj.svg" />
    <img class="menu_icon" src="@/assets/initialPage/connection.svg" />
    <img class="menu_icon" src="@/assets/initialPage/painter.svg" />
    <img class="png_icon" src="@/assets/initialPage/recommendations.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InitalMenu",
});
</script>

<style lang="scss" scoped>
.menu_wrapper {
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  .menu_icon {
    width: 200px;
    height: 200px;
  }
  .png_icon {
    width: 200px;
    height: 190px;
  }
}
</style>

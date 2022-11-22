<template>
  <div class="menu">
    <div class="icons">
      <img
        class="menu_icon"
        src="@/assets/initialPage/home.svg"
        @click="$router.push('/')"
      />
      <img
        class="menu_icon"
        src="@/assets/initialPage/exit.svg"
        @click="$router.push('/login')"
      />
    </div>
    <MenuOptions />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MenuOptions from "../MenuOptions/MenuOptions.vue";
export default defineComponent({
  name: "AppMenu",
  components: {
    MenuOptions,
  },
});
</script>
<style lang="scss">
.menu {
  color: white;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  @media only screen and (min-width: 0px) and (max-width: 1100px) {
    width: 40px;
  }
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
}
</style>

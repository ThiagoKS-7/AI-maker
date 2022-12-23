<template>
  <div class="menu">
    <div class="icons">
      <img :src="user.img" alt="" class="avatar"/>
      <div class="user_info">
        <span class="username">{{ user.name }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
      <img
        class="menu_icon"
        src="@/assets/initialPage/exit.svg"
        @click="$router.push('/auth')"
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
  data() {
    return {
      user: {
        name: "",
        img: "#",
        email: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
        const name = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const img = localStorage.getItem("img");
        this.user.name = name as string;
        this.user.email = email as string;
        this.user.img = img as string;
    },
  },
});
</script>
<style lang="scss">
.avatar {
  width: 45px;
  height: 45px;
}
.user_info {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  .username {
    font-size: 17px;
    font-weight: bold;
  }
  .password {
    font-size: 9px;
    color: rgb(153, 153, 153);
  }
}
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
    width: fit-content;
    align-items: center;
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

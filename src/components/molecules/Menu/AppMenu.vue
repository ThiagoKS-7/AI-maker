<template>
  <div class="menu">
    <div
      class="icons"
      v-if="$store.getters.getSignedIn && $store.getters.getSignedIn != false"
    >
      <img :src="cImage" alt="" class="avatar" />
      <div class="user_info">
        <span class="username">{{ user.name }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
      <img
        class="menu_icon"
        src="@/assets/initialPage/exit.svg"
        @click="handleSignOut()"
      />
    </div>
    <MenuOptions />
  </div>
</template>
<script lang="ts">
import MenuOptions from "../MenuOptions/MenuOptions.vue";
import { defineComponent } from "vue";
import firebaseConfig from "@/firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const db: any = getFirestore();
firebaseConfig;
export default defineComponent({
  name: "AppMenu",
  components: {
    MenuOptions,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
    };
  },
  computed: {
    cImage(this: any) {
      return this.$store.getters.getImg;
    },
  },
  created() {
    this.getUser();
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    async getUser() {
      const querySnapshot = await getDocs(collection(db, "documents"));
      await querySnapshot.forEach((doc: any) => {
        this.validateSignIn(doc);
      });
    },
    validateSignIn(doc: any) {
      const data = doc.data();
      if (data.isSignedIn) {
        if (doc.id == "users") {
          this.user.name = data.username as string;
          this.user.email = data.email as string;
          this.$store.commit("setImg", data.img as string);
          this.$store.commit("setSignedIn", data.isSignedIn as boolean);
          this.$router.push("/dashboard");
        }
      } else {
        this.$router.push("/auth");
      }
    },
    checkUser() {
      if (this.$store.getters.getSignedIn) {
        this.getUser();
      } else {
        this.handleSignOut();
      }
    },
    handleSignOut() {
      signOut(auth)
        .then(() => {
          this.$store.commit("setUser", {});
          localStorage.setItem("username", "-");
          localStorage.setItem("email", "-");
          localStorage.setItem("img", "-");
          this.$store.commit("setSignedIn", false);
          this.$router.push("/auth");
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/auth");
        });
    },
  },
});
</script>
<style lang="scss">
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 2em;
}
.user_info {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  .username {
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
  }
  .email {
    font-size: 14px;
    color: #b8b6b6;
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

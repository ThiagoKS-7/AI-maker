export interface LoginState {
  user: object;
  img: string;
  isSignedIn: boolean;
}

export const LoginModule = {
  state: (): LoginState => ({
    user: {},
    img: "",
    isSignedIn: false,
  }),
  getters: {
    getUser: (state: { user: any }) => {
      return state.user;
    },
    getImg: (state: { img: any }) => {
      return state.img;
    },
    getSignedIn: (state: { isSignedIn: any }) => {
      return state.isSignedIn;
    },
  },
  mutations: {
    setUser(state: { user: any }, value: any) {
      state.user = value;
    },
    setImg(state: { img: any }, value: any) {
      state.img = value;
    },
    setSignedIn(state: { isSignedIn: any }, value: any) {
      state.isSignedIn = value;
    },
  },
};

export interface LoginState {
  user: object;
  isSignedIn: boolean;
}

export const LoginModule = {
  state: (): LoginState => ({
    user: {},
    isSignedIn: false,
  }),
  getters: {
    getUser: (state: { user: any }) => {
      return state.user;
    },
    getSignedIn: (state: { isSignedIn: any }) => {
      return state.isSignedIn;
    },
  },
  mutations: {
    setUser(state: { user: any }, value: any) {
      state.user = value;
    },
    setSignedIn(state: { isSignedIn: any }, value: any) {
      state.isSignedIn = value;
    },
  },
};

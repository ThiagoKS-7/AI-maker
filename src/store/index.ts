import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { DashState, DashboardModule } from "./dashboard/dashboardModule";
import { LoginState, LoginModule } from "./login/loginModule";
/* eslint-disable */
export interface State {
  dashBoard: DashState,
  login: LoginState,
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    dashboard: DashboardModule,
    login: LoginModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}

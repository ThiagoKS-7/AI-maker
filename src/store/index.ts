import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { DashState, DashboardModule } from "./dashboard/dashboardModule";
/* eslint-disable */
export interface State {
  dashBoard: DashState,
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    dashboard: DashboardModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}

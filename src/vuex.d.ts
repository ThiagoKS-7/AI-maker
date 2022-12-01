import { Store } from "vuex";
import { DashState, DashboardModule } from "./dashboard/dashboardModule";
/* eslint-disable */


declare module "@vue/runtime-core" {
  export interface State {
    dashBoard: DashState,
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

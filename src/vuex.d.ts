import { Store } from "vuex";

declare module "@vue/runtime-core" {
  export interface State {
    files: object;
    formData: FormData;
    apiUrl: string;
    ready: boolean;
    exceptions: number;
    nodeList: Array<object>;
    connections: string;
    loader: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

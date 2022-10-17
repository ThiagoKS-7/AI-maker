import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

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

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    files: {},
    formData: new FormData(),
    apiUrl: "",
    ready: false,
    exceptions: 0,
    nodeList: [],
    connections: "",
    loader: false,
  },
  getters: {
    getFiles: (state) => {
      return state.files;
    },
    getFormData: (state) => {
      return state.formData;
    },
    getApiUrl: (state) => {
      return state.apiUrl;
    },
    isReady: (state) => {
      return state.ready;
    },
    getExceptions: (state) => {
      return state.exceptions;
    },
    getNodeList: (state) => {
      return state.nodeList;
    },
    getConnections: (state) => {
      return state.connections;
    },
    getLoader: (state) => {
      return state.loader;
    },
  },
  mutations: {
    setFiles(state, value) {
      state.files = value;
    },
    formAppend(state, value) {
      state.formData.append("images", value);
    },
    setApiUrl(state, value) {
      state.apiUrl = value;
    },
    setReady(state, value) {
      state.ready = value;
    },
    increaseException(state) {
      state.exceptions++;
    },
    clearException(state) {
      state.exceptions = 0;
    },
    removeOne(state) {
      state.nodeList.pop();
    },
    clearNodeList(state) {
      while (state.nodeList.length != 0) {
        state.nodeList.pop();
      }
    },
    setNodeList(state, value) {
      state.nodeList = value;
    },
    pushConnection(state, value) {
      state.connections += value;
    },
    clearConnections(state) {
      state.connections = "";
    },
    updateLoader(state, value) {
      state.loader = value;
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

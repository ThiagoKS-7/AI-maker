import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  files: object;
  formData: FormData;
  apiUrl: string;
  ready: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    files: {},
    formData: new FormData(),
    apiUrl: "",
    ready: false,
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
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

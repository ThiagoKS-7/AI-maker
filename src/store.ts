import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  files: object;
  formData: FormData;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    files: {},
    formData: new FormData(),
  },
  getters: {
    getFiles: (state) => {
      return state.files;
    },
    getFormData: (state) => {
      return state.formData;
    },
  },
  mutations: {
    setFiles(state, value) {
      state.files = value;
    },
    formAppend(state, value) {
      state.formData.append("images", value);
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

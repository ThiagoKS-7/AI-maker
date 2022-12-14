export interface DashState {
  files: object;
  formData: FormData;
  openFileData: FormData;
  apiUrl: string;
  ready: boolean;
  exceptions: number;
  nodeList: Array<object>;
  connections: string;
  loader: boolean;
  tabs: Array<object>;
  nameModal: boolean;
  currentFileName: string;
}

export const DashboardModule = {
  state: (): DashState => ({
    files: {},
    formData: new FormData(),
    openFileData: new FormData(),
    apiUrl: "",
    ready: false,
    exceptions: 0,
    nodeList: [],
    connections: "",
    loader: false,
    tabs: [],
    nameModal: false,
    currentFileName: "",
  }),
  getters: {
    getFiles: (state: { files: any }) => {
      return state.files;
    },
    getFormData: (state: { formData: any }) => {
      return state.formData;
    },
    getOpenFileData: (state: { openFileData: any }) => {
      return state.openFileData;
    },
    getApiUrl: (state: { apiUrl: any }) => {
      return state.apiUrl;
    },
    isReady: (state: { ready: any }) => {
      return state.ready;
    },
    getExceptions: (state: { exceptions: any }) => {
      return state.exceptions;
    },
    getNodeList: (state: { nodeList: any }) => {
      return state.nodeList;
    },
    getConnections: (state: { connections: any }) => {
      return state.connections;
    },
    getLoader: (state: { loader: any }) => {
      return state.loader;
    },
    getTabs: (state: { tabs: any }) => {
      return state.tabs;
    },
    getNameModal: (state: { nameModal: any }) => {
      return state.nameModal;
    },
    getCurrentFileName: (state: { currentFileName: any }) => {
      return state.currentFileName;
    },
  },
  mutations: {
    setFiles(state: { files: any }, value: any) {
      state.files = value;
    },
    formAppend(
      state: { formData: { append: (arg0: string, arg1: any) => void } },
      value: any
    ) {
      state.formData.append("images", value);
    },
    setOpenFileData(state: { openFileData: any }, value: any) {
      state.openFileData = value;
    },
    openFileDataAppend(
      state: { openFileData: { append: (arg0: string, arg1: any) => void } },
      value: any
    ) {
      state.openFileData.append("images", value);
    },
    setApiUrl(state: { apiUrl: any }, value: any) {
      state.apiUrl = value;
    },
    setReady(state: { ready: any }, value: any) {
      state.ready = value;
    },
    increaseException(state: { exceptions: number }) {
      state.exceptions++;
    },
    clearException(state: { exceptions: number }) {
      state.exceptions = 0;
    },
    removeOne(state: { nodeList: void[] }) {
      state.nodeList.pop();
    },
    clearNodeList(state: { nodeList: any }) {
      state.nodeList = [];
    },
    setNodeList(state: { nodeList: any }, value: any) {
      state.nodeList = value;
    },
    pushNodeList(state: { nodeList: any }, value: any) {
      state.nodeList.push(JSON.parse(value));
    },
    pushConnection(state: { connections: any }, value: any) {
      state.connections += value;
    },
    clearConnections(state: { connections: string }) {
      state.connections = "";
    },
    updateLoader(state: { loader: any }, value: any) {
      state.loader = value;
    },
    setTabs(state: { tabs: any }, value: any) {
      state.tabs = value;
    },
    pushTabs(state: { tabs: any }, value: any) {
      state.tabs.push(value);
    },
    setNameModal: (state: { nameModal: any }, value: boolean) => {
      state.nameModal = value;
    },
    setCurrentFileName: (state: { currentFileName: any }, value: string) => {
      state.currentFileName = value;
    },
  },
};
